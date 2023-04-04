<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review; // Using the Review model

class ReviewController extends Controller
{
    function reviewProduct(Request $req){
        $review = new Review;
        $review->userid = $req->input("userid_localstg");
        $review->productid = $req->input("id");
        $review->review = $req->input("review");
        $review->username = $req->input("username");
        $review->save();
        return $review;
    }

    function getReviews($id){
        
        return Review::where("productid", $id)->get(); //returning the reviews with the product id
    }
}
