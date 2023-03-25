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
        $product->userid = $req->input("userid"); //getting the category from the request
        $product->file_path = $req->file("file")-> store("products"); //getting the image from the request
        
        $product->save(); //saving the product to the database
        return $product; //returning the product
        
        if ($product->save()) {
            return ["result" => "Product has been added"]; //returning a message if the product has been added
        }
        else {
            return ["result" => "Operation failed"]; //returning a message if the product has not been added
        }
    }

    function getProducts()
    {
        return Product::all(); //returning all the products in the database
    }

    function deleteProduct($id)
    {
        $result = Product::where("id", $id)->delete(); //deleting the product from the database
        if ($result) {
            return ["result" => "Product has been deleted"]; //returning a message if the product has been deleted
        }
        else {
            return ["result" => "Operation failed"]; //returning a message if the product has not been deleted
        }
    }

    function getSingleProduct($id){
        
        return Product::find($id); //returning the product with the id
    }
}
 