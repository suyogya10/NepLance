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
use App\Http\Controllers\UserReviewController;
use App\Http\Controllers\UserRequestController;
use App\Http\Controllers\FrequentlyAskedController;
use App\Http\Controllers\NotificationHistoryController;

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
Route:: get('getUser/{userid}', [UserController::class, 'getUser']); //get single user
Route:: get('getUserAll', [UserController::class, 'getUserAll']); //get all user
Route:: put('putKeywords/{UserId}', [UserController::class, 'putKeywords']); //put keywords
Route:: get('getRecommended/{userId}', [UserController::class, 'getRecommended']); //get recommended user
Route:: get('getRecommendedSellers/{userid}', [UserController::class, 'getRecommendedSellers']); //get all recommended user
Route:: put('requestOTP', [UserController::class, 'requestOTP']);
Route:: put('forgotPasswordChange', [UserController::class, 'forgotPasswordChange']);
Route:: put('updatePassword/{id}', [UserController::class, 'updatePassword']);


Route:: post('addproduct', [ProductController::class, 'addProduct']); //add product route
Route:: get('getProducts', [ProductController::class, 'getProducts']); //add product route
Route:: delete('deleteProduct/{id}', [ProductController::class, 'deleteProduct']); //delete product route
Route:: put('updateProduct/{id}', [ProductController::class, 'updateProduct']); //update product route
Route:: get('getSingleProduct/{id}', [ProductController::class, 'getSingleProduct']); //get single product route
Route::get('search/{key}', [ProductController::class, 'search']); //search route


Route:: post('reviewProduct', [ReviewController::class, 'reviewProduct']); //review product route
Route:: get('getReviews/{id}', [ReviewController::class, 'getReviews']); //get reviews route
Route:: get('getReviewsAll', [ReviewController::class, 'getReviewsAll']); //get all reviews route
Route:: get('getRatings', [ReviewController::class, 'getRatings']); //get all reviews route
Route:: get('getReviewByUser/{id}', [ReviewController::class, 'getReviewByUser']); //get reviews by user route
Route:: delete('deleteReview/{sid}', [ReviewController::class, 'deleteReview']); //delete review route


Route::post('/chat/{recipient}/message', [ChatController::class, 'sendMessage']); //send message route
Route::get('/messages/{recipient}/{sender_id}', [ChatController::class, 'getMessages']);
Route::get('chat/recipients/{sender_id}', [ChatController::class, 'getRecipients']);


Route::post('addOrder', [OrderController::class, 'addOrder']); //add order route
Route::get('getOrders/{id}', [OrderController::class, 'getOrders']); //get order route
Route::get('getRecievedOrders/{sid}', [OrderController::class, 'getRecievedOrders']); //get order route
Route::put('sellerUpdateOrder/{oid}', [OrderController::class, 'sellerUpdateOrder']); //update order route
Route::put('rateOrder/{orid}', [OrderController::class, 'rateOrder']); //rate order route


Route::get('getRating/{usid}', [UserReviewController::class, 'getRating']); //get rating route
Route:: post('reviewUser', [UserReviewController::class, 'reviewUser']); //review user route
Route:: get('getUserReviews/{usid}', [UserReviewController::class, 'getUserReviews']); //get user reviews route
Route:: get('topRated', [UserReviewController::class, 'topRated']); //get top rated route
Route::get('getUserReviewsbyUser/{usid}', [UserReviewController::class, 'getReviewsbyUser']); //get reviews by user route
Route::delete('deleteUserReview/{sid}', [UserReviewController::class, 'deleteUserReview']); //delete user review route


// Route::post('login', [AuthController::class, 'login']);
Route::post('Adminlogin', [AdminController::class, 'Adminlogin']);
Route:: get('getTotalCounts', [AdminController::class, 'getTotalCounts']); //get total counts route


Route::post('addRequest/{userid}', [UserRequestController::class, 'addRequest']); //add request route
Route::get('getRequests', [UserRequestController::class, 'getRequests']); //get request route
Route::get('getRequestByUser/{id}', [UserRequestController::class, 'getRequestByUser']); //get request route
Route::get('getRequestBySeller/{id}', [UserRequestController::class, 'getRequestBySeller']); //get request route
Route::delete('deleteRequest/{id}', [UserRequestController::class, 'deleteRequest']); //delete request route
Route::put('sellerAccept/{id}', [UserRequestController::class, 'sellerAccept']); //accept request route
Route::put('sellerBid/{id}', [UserRequestController::class, 'sellerBid']); //bid request route
Route::get('getCategorizedRequests/{category}', [UserRequestController::class, 'getCategorizedRequests']); //get categorized request route
Route::put('userAccept/{id}', [UserRequestController::class, 'userAccept']); //accept request route
Route::put('userReject/{id}', [UserRequestController::class, 'userReject']); //reject request route
Route::put('Payment/{id}', [UserRequestController::class, 'Payment']); //payment request route
Route::put('Delivery/{id}', [UserRequestController::class, 'Delivery']); //delivery request route


Route::post('addFAQ',[FrequentlyAskedController::class,'addFAQ']);
Route::get('getFAQ',[FrequentlyAskedController::class,'getFAQ']);
Route::delete('deleteFAQ/{id}',[FrequentlyAskedController::class,'deleteFAQ']);


Route::post('addNotification',[NotificationHistoryController::class,'addNotification']);
Route::get('getNotification/{id}',[NotificationHistoryController::class,'getNotification']);

Route::group(['middleware' => 'auth:api'], function(){
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});