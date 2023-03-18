<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;

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

Route::post('login', [AuthController::class, 'login']);
Route:: post('register', [UserController::class, 'register']); //register route
// Route:: post('login', [UserController::class, 'login']);  //login route
Route:: post('addproduct', [ProductController::class, 'addProduct']); //add product route
Route:: get('getProducts', [ProductController::class, 'getProducts']); //add product route

Route::group(['middleware' => 'auth:api'], function(){
    Route::get('user', [UserController::class, 'index']);
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});



