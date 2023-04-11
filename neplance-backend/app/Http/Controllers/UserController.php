<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; // Using the User model provided by Laravel
use Illuminate\Support\Facades\Hash; // Using the Hash class provided by Laravel


class UserController extends Controller
{
    function register(Request $req)
    {
        $user = new User; //creating a new user object
        $user->name = $req->input("name"); //getting the name from the request
        $user->email = $req->input("email"); //getting the email from the request
        $user->password = Hash::make($req->input("password")); //getting the password from the request and hashing it or encrypting it
        $user->designation = $req->input("designation"); //getting the category from the request
        $user->file_path = $req->file("file")-> store("users"); //getting the image from the request
        $user->save(); //saving the user to the database
        return $user; //returning the user

    }

    function login(Request $req)
    {
        $user = User::where("email", $req->email)->first(); //getting the user from the database
        if (!$user || !Hash::check($req->password, $user->password)) { //checking if the user exists and if the password is correct
            return ["error" => "Email or password is not matched"]; //returning an error message
        }
        return $user; //returning the user
    }

    function getUser($userid)
    {
        return User::find($userid); //returning the product with the id return User::all($userid); //returning all the users in the database
    }

    function deleteUser($userid)
    {
        $result = User::where("id", $userid)->delete();
         //deleting the user from the database
        if ($result) {
            return ["result" => "User has been deleted"]; //returning a message if the user has been deleted
        }
        else {
            return ["result" => "Operation failed"]; //returning a message if the user has not been deleted
        }
    }

    function UpdateUser($userid, Request $req)
    {
        $user = User::find($req->id); //finding the product with the id
        $user->name = $req->name; //getting the name from the request
        $user->designation = $req->designation; //getting the designation from the request

        if ($req->file("file")) {
            $user->file_path = $req->file("file")-> store("users"); //getting the image from the request
        }
        $user->save(); //saving the product to the database
        return $user; //returning the product
    }

    function getUserAll()
    {
        return User::all(); //returning all the users in the database
    }

}
