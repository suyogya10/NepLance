<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat; // Using the Chat model

class ChatController extends Controller
{
    function addchat(Request $req){
        $chat = new Chat;
        $chat->from_userid = $req->input("from_userid");
        $chat->to_userid = $req->input("to_userid");
        $chat->message = $req->input("message");
        $chat->username = $req->input("username");
        $chat->save();
        return $chat;
    }

    function getchats($id){
        
        return Chat::where("to_userid", $id)->get(); //returning the chat with the id
    }
}
