<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product; // Using the Product model 
// use Http\Controllers\UserController; // Using the UserController

class ProductController extends Controller
{
    function addProduct(Request $req)
    {
        $product = new Product; //creating a new product object
        $product->name = $req->input("name"); //getting the name from the request
        $product->price = $req->input("price"); //getting the price from the request
        $product->description = $req->input("description"); //getting the description from the request
        $product->category = $req->input("category"); //getting the category from the request
        $product->file_path = $req->file("file")-> store("products"); //getting the image from the request
        
        $product->save(); //saving the product to the database
        return $product; //returning the product 
    }

    function getProducts()
    {
        return Product::all(); //returning all the products in the database
    }
}
 