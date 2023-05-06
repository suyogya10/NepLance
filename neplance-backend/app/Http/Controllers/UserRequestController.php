<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserRequest;

class UserRequestController extends Controller
{
    function addRequest(Request $req, $userid)
    {
        $userRequest = new UserRequest;
        $userRequest->userid = $userid;
        $userRequest->name = $req->name;
        $userRequest->description = $req->description;
        $userRequest->price = $req->price;
        $userRequest->category = $req->category;
        $userRequest->delivery_date = $req->delivery_date;
        $userRequest->save();
        return $userRequest;
    }

    function getRequests()
    {
        return UserRequest::all();
    }

    function getRequestByUser($id)
    {
        return UserRequest::where('userid', $id)->get();
    }

    function getRequestBySeller($id)
    {
        return UserRequest::where('sellerid', $id)->get();
    }

    function deleteRequest($id)
    {
        $result = UserRequest::where('id', $id)->delete();
        if ($result) {
            return ["result" => "Request has been deleted"];
        } else {
            return ["result" => "Operation failed"];
        }
    }

    function sellerAccept($id, Request $req)
    {
        $result = UserRequest::where('id', $id)
            ->update(['sellerid' => $req->sellerid, 'status' => 'Accepted', 'seller_bid' => null]);
        if ($result) {
            return ["result" => "Request has been accepted"];
        } else {
            return ["result" => "Operation failed"];
        }
    }

    function userAccept($id, Request $req)
    {
        $result = UserRequest::where('id', $id)
            ->update(['status' => 'Accepted', 'price' => $req->price, 'seller_bid' => null]);
        if ($result) {
            return ["result" => "Request has been accepted"];
        } else {
            return ["result" => "Operation failed"];
        }
    }

    function userReject($id)
    {
        $result = UserRequest::where('id', $id)
            ->update(['status' => 'Not accepted yet', 'sellerid' => null, 'seller_bid' => null]);
        if ($result) {
            return ["result" => "Request has been rejected"];
        } else {
            return ["result" => "Operation failed"];
        }
    }

    function sellerBid(Request $req, $id)
    {
        $result = UserRequest::where('id', $id)
            ->update(['seller_bid' => $req->seller_bid, 'sellerid' => $req->sellerid]);
        if ($result) {
            return ["result" => "Bid has been placed"];
        } else {
            return ["result" => "Operation failed"];
        }
    }

    function getCategorizedRequests($category)
    {
        return UserRequest::where('category', $category)->get();
    }

    function Payment($id, Request $req){
        $result = UserRequest::where('id', $id)
            ->update(['payment_token' => $req -> payment_token]);
        if ($result) {
            return ["result" => "Payment has been made"];
        } else {
            return ["result" => "Operation failed"];
        }
    }

    function Delivery($id, Request $req){
        $result = UserRequest::find($id);
        if ($req->hasFile("file_seller")) {
            $result->file_seller = $req->file("file_seller")-> store("file_seller");
        }
        $result->comments_seller = $req->comments_seller;
        $result->save();
        return $result;
    }

}
