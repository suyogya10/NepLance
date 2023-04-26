<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) { 
    return $request->user();
});


Route:: post('register', [UserController::class, 'register']); //register route
Route ::delete('deleteUser/{userid}', [UserController::class, 'deleteUser']); //delete user route
Route:: put('updateUser/{id}', [UserController::class, 'updateUser']); //update product route
Route:: post('login', [UserController::class, 'login']);  //login route
Route:: post('verify/{otp}', [UserController::class, 'verify']); //verify route
Route:: post('verifyCtzn/{id}', [UserController::class, 'verifyCtzn']); //verify ctzn route
Route:: post('declineCtzn/{id}', [UserController::class, 'declineCtzn']); //decline ctzn route
Route:: get('viewCtznReq', [UserController::class, 'viewCtznReq']); //upload ctzn route
Route:: put('becomeSeller/{id}', [UserController::class, 'becomeSeller']); //become seller route

Route:: post('addproduct', [ProductController::class, 'addProduct']); //add product route
Route:: get('getProducts', [ProductController::class, 'getProducts']); //add product route
Route:: delete('deleteProduct/{id}', [ProductController::class, 'deleteProduct']); //delete product route
Route:: put('updateProduct/{id}', [ProductController::class, 'updateProduct']); //update product route
Route:: get('getSingleProduct/{id}', [ProductController::class, 'getSingleProduct']); //get single product route
Route:: get('getUser/{userid}', [UserController::class, 'getUser']); //get single user
Route:: get('getUserAll', [UserController::class, 'getUserAll']); //get all user


Route:: post('reviewProduct', [ReviewController::class, 'reviewProduct']); //review product route
Route:: get('getReviews/{id}', [ReviewController::class, 'getReviews']); //get reviews route
Route:: get('getReviewsAll', [ReviewController::class, 'getReviewsAll']); //get all reviews route

Route:: get('getReviewByUser/{id}', [ReviewController::class, 'getReviewByUser']); //get reviews by user route
Route:: delete('deleteReview/{sid}', [ReviewController::class, 'deleteReview']); //delete review route
Route::get('search/{key}', [ProductController::class, 'search']); //search route
Route::post('addchat', [ChatController::class, 'addchat']); //add chat route
Route::get('getchats/{id}', [ChatController::class, 'getchats']); //get chat route



Route::post('addOrder', [OrderController::class, 'addOrder']); //add order route
Route::get('getOrders/{id}', [OrderController::class, 'getOrders']); //get order route
Route::get('getRecievedOrders/{sid}', [OrderController::class, 'getRecievedOrders']); //get order route
Route::put('sellerUpdateOrder/{oid}', [OrderController::class, 'sellerUpdateOrder']); //update order route


// Route::post('login', [AuthController::class, 'login']);
Route::post('Adminlogin', [AdminController::class, 'Adminlogin']);




Route::group(['middleware' => 'auth:api'], function(){
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});