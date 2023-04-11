<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin; // Using the Admin model

class AdminController extends Controller
{
    function Adminlogin(Request $req)
    {
        $admin = Admin::where("username", $req->username)->where("password",($req-> password))->first(); //getting the admin from the database
        if (!$admin) { //checking if the admin exists and if the password is correct
            return ["error" => "Invalid"]; //returning an error message
        }
        return $admin; //returning the user
    }
}
