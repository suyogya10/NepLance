<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order; // Using the Order model

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
        // $order->payment_id = $req->input("payment_id");
        $order->token = $req->input("token");
        $order->status = $req->input("status");
        $order->product_name = $req->input("product_name");
        $order->file_client = $req->file("file_client")-> store("file_client");
        $order->save();
        return $order;
    }

    function sellerUpdateOrder($oid, Request $req){
        $order = Order::find($req->oid);
        $order->status = "Delivered";
        $order->file_seller = $req->file_seller-> store("file_seller");
        $order->comments_seller = $req->comments_seller;
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
