<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review; // Using the Review model
use Illuminate\Support\Facades\DB;

class ReviewController extends Controller
{
    function reviewProduct(Request $req){
        $review = new Review;
        $review->userid = $req->input("userid_localstg");
        $review->productid = $req->input("id");
        $review->review = $req->input("review");
        $review->username = $req->input("username");
        $review->rating = $req->input("rating");
        $review->save();
        return $review;
    }

    function getReviews($id){
        
        return Review::where("productid", $id)->get(); //returning the reviews with the product id
    }

    function getReviewByUser($id){
        
        return Review::where("userid", $id)->get(); //returning the reviews with the user id
    }

    function deleteReview($sid){
        $result = Review::where("review_id", $sid)->delete(); //deleting the product from the database
        if ($result) {
            return ["result" => "Product has been deleted"]; //returning a message if the product has been deleted
        }
        else {
            return ["result" => "Operation failed"]; //returning a message if the product has not been deleted
        }
    }

    function getReviewsAll(){
        
        return Review::all(); //returning all the reviews in the database
    }

    function getRatings(){
            
        $averageRatings = Review::select('productId', DB::raw('ROUND(AVG(rating)) as average_rating'))
        ->groupBy('productId')
        ->get();
 
    return $averageRatings;

    }
    
}
