<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserReview; // Using the UserReview model
use Illuminate\Support\Facades\DB; // Using the DB facade
use App\Models\User; // Using the User model

class UserReviewController extends Controller
{
    function reviewUser(Request $req){
        $review = new UserReview;
        $review->userid = $req->input("userid");
        $review->username = $req->input("username");
        $review->sellerid = $req->input("sellerid");
        $review->review = $req->input("review");
        $review->rating = $req->input("rating");
        $review->save();
        return $review;
    }

    function getRating($usid){
        $rating = UserReview::where("sellerid", $usid)->avg("rating");
        return array("rating"=>$rating);
    }

    function getUserReviews($usid){
        
        return UserReview::where("sellerid", $usid)->get(); //returning the reviews with the user id
    }

    function topRated() {
        $sellers = UserReview::select('sellerid', DB::raw('ROUND(AVG(rating),2) as avg_rating'))
        ->groupBy('sellerid')
        ->orderBy('avg_rating', 'desc')
        ->take(5) // change this to the number of sellers you want to fetch
        ->get();

    // Fetch the details of users from the 'users' table
    $userIds = $sellers->pluck('sellerid')->toArray();
    $users = User::whereIn('id', $userIds)->get();

    // Map the user details to the sellers collection
    $sellers = $sellers->map(function ($seller) use ($users) {
        $user = $users->where('id', $seller->sellerid)->first();
        $seller->name = $user->name;
        $seller->designation = $user->designation;
        $seller->file_path = $user->file_path;
        return $seller;
    });

    return $sellers;
    }
}
