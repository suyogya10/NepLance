<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order; // Using the Order model
use App\Models\NotificationHistory;

class OrderController extends Controller
{
    function addOrder(Request $req){
        $order = new Order;
        $order->seller_id = $req->input("seller_id");
        $order->client_id = $req->input("client_id");
        $order->product_id = $req->input("product_id");
        $order->quantity = $req->input("quantity");
        $order->price = $req->input("price");
        $order->comments = $req->input("comments");
        $order->token = $req->input("token");
        $order->status = $req->input("status");
        $order->product_name = $req->input("product_name");

        if ($req->hasFile("file_client")) {
            $order->file_client = $req->file("file_client")-> store("file_client");
        }
        // $order->file_client = $req->file("file_client")-> store("file_client");
        $order->save();

        $notification = new NotificationHistory;
        $notification->user_id = $req->input("seller_id");
        $notification->notification = "You have a new order from " . $req->input("clientname");
        $notification->save();

        return $order;
    }

    function sellerUpdateOrder($oid, Request $req){
        $order = Order::find($req->oid);
        $order->status = "Delivered";
        if ($req->hasFile("file_seller")) {
            $order->file_seller = $req->file("file_seller")-> store("file_seller");
        }
        $order->comments_seller = $req->comments_seller;
        $order->save();

        $notification = new NotificationHistory;
        $notification->user_id = $req->input("client_id");
        $notification->notification = "Your order from " . $req->input("seller_name") . " has been delivered";
        $notification->save();
        
        return $order;
    }

    function rateOrder($orid, Request $req){
        $order = Order::find($req->orid);
        $order->rating = $req->rating;
        $order->save();
        return $order;
    }

    function getOrders($id){
        
        return Order::where("client_id", $id)->get(); //returning the order with the id
    }

    function getRecievedOrders($sid){
            
        return Order::where("seller_id", $sid)->get(); //returning the order with the seller id
    }

}
