<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin; // Using the Admin model
use Illuminate\Support\Facades\DB; // Using the DB facade

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

    public function getTotalCounts()
{
    $usersCount = DB::table('users')->count();
    $sellerRequestCount = DB::table('users')->where([
        ['requested', '=', 'yes']
    ])->count();
    $freelancers = DB::table('users')->where([
        ['registered_as', '=', 'seller']
    ])->count();
    $productsCount = DB::table('products')->count();
    $ordersCount = DB::table('orders')->count();
    $reviewsCount = DB::table('reviews')->count();

    return [
        'users' => $usersCount,
        'requests' => $sellerRequestCount,
        'products' => $productsCount,
        'orders' => $ordersCount,
        'reviews' => $reviewsCount,
        'freelancers' => $freelancers
    ];
}

}
