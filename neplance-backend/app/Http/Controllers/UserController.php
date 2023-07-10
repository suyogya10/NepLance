<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; // Using the User model provided by Laravel
use Illuminate\Support\Facades\Hash; // Using the Hash class provided by Laravel
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Validator;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use App\Models\NotificationHistory;


class UserController extends Controller
{
    function register(Request $req)
    {

        $validator =  Validator::make($req->all(),[

            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:6',
            'phone' => 'required|min:10|unique:users,number']);

            if ($validator->fails()) {
                // handle the validation errors here
                // for example, you can return a custom error response
                return response()->json(['errors' => $validator->errors()], 422);
            }

        $otpCode = rand(1000,9999);
        $user = new User; //creating a new user object
        $user->name = $req->input("name"); //getting the name from the request
        $user->email = $req->input("email"); //getting the email from the request
        $user->password = Hash::make($req->input("password")); //getting the password from the request and hashing it or encrypting it
        // $user->designation = $req->input("designation"); //getting the category from the request
        // $user->file_path = $req->file("file")-> store("users"); //getting the image from the request
        $user->number = $req->input("phone"); //getting the phone number from the request
        $user->otp = $otpCode; //getting the otp from the request
        $user->registered_as = "client";
        //dd($user->otp);
        $user->save(); 

        

        $args = http_build_query(array(
            'auth_token'=> 'ENTER TOKEN HERE',
            'to'    => $req->input("phone"),
            'text'  => 'Hi, Your OTP for registration at NepLance is: '.$otpCode));
        $url = "https://sms.aakashsms.com/sms/v3/send/"; // Aakash SMS Endpoint V3 to send SMS

        # Make the call using API.
        $ch = curl_init(); // Initialize cURL
        curl_setopt($ch, CURLOPT_URL, $url); 
        curl_setopt($ch, CURLOPT_POST, 1); ///
        curl_setopt($ch, CURLOPT_POSTFIELDS,$args);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
        // Response
        $response = curl_exec($ch);
        curl_close($ch);    
        // send the SMS message

        return $user; //returning the user

    }

    function requestOTP(Request $req){

        $user = User::where('number', $req->number)->first();
        $otpCode = rand(1000,9999);


        $args = http_build_query(array(
            'auth_token'=> '1c2f4c96f4af3cd74a7c9bccf03a4cf6284cc18360dbbce2112f52e9de4446b6',
            'to'    => $req->input("number"),
            'text'  => 'Hi, Your OTP for Password Reset at NepLance is: '.$otpCode));
        $url = "https://sms.aakashsms.com/sms/v3/send/"; // Aakash SMS Endpoint V3 to send SMS

        # Make the call using API.
        $ch = curl_init(); // Initialize cURL
        curl_setopt($ch, CURLOPT_URL, $url); 
        curl_setopt($ch, CURLOPT_POST, 1); ///
        curl_setopt($ch, CURLOPT_POSTFIELDS,$args);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
        // Response
        $response = curl_exec($ch);
        curl_close($ch);    
        // send the SMS message
        if ($user){
            $user->otp = $otpCode; //getting the otp from the request
            $user->save();
            return $otpCode;
        }else{
            return ["Invalid Mobile Number"];
        }     
        
    }

    function forgotPasswordChange(Request $req){

        $user = User::where('otp', $req->otp)->first();
        if($user) {
            if($user->otp == $req->otp) {
                $user->password = Hash::make($req->input("newpassword"));
                $user->isVerified = 'yes';
                $user->otp = '';
                $user->save();
                return $user;
            } else {
               return ["OTP does not match"];
            }
        } else {
            return ["OTP does not match"];
        }
    }

    function login(Request $req)
    {
        $user = User::where('email', $req->email)->first();
        if($user) {
            if(Hash::check($req->password, $user->password)) {
                if($user->isVerified == 'yes') {
                    $credentials = $req->only('email', 'password');
                   $token = auth()->attempt($credentials);
                    return $this->respondWithToken($token);
                } else {
                    return response()->json(['error' => 'User not verified'], 401);
                }
            } else {
                return response()->json(['error' => 'Password not match'], 401);
            }
        } else {
            return response()->json(['error' => 'User not found'], 401);
        }

    }
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }

    function getUser($userid)
    {
        $user = User::find($userid);
        $num_products = DB::table('products')
            ->where('userid', $userid)
            ->count();
        $user->num_products = $num_products;
        return $user;
    }

    // function deleteUser($userid)
    // {
    //     $result = User::where("id", $userid)->delete();
    //      //deleting the user from the database
    //     if ($result) {
    //         return ["result" => "User has been deleted"]; //returning a message if the user has been deleted
    //     }
    //     else {
    //         return ["result" => "Operation failed"]; //returning a message if the user has not been deleted
    //     }
    // }

    function deleteUser($userid)
{
    // Deleting related records from the `products` table
    DB::table('products')->where('userid', $userid)->delete();

    // Deleting related records from the `orders` table
    DB::table('orders')->where('seller_id', $userid)->delete();
    DB::table('orders')->where('client_id', $userid)->delete();

    // Deleting related records from the `reviews` table
    DB::table('reviews')->where('userid', $userid)->delete();

    // Deleting related records from the `user_reviews` table
    DB::table('user_reviews')->where('userid', $userid)->delete();

    // Deleting related records from the `chats` table
    DB::table('chats')->where('sender_id', $userid)->delete();
    DB::table('chats')->where('recipient_id', $userid)->delete();

    // Deleting the user from the `users` table
    $result = User::where('id', $userid)->delete();

    if ($result) {
        return ["result" => "User and related records have been deleted"];
    } else {
        return ["result" => "Operation failed"];
    }
}


    function updateUser($id,Request $req)
    {
        $user = User::find($req->id); //finding the user with the id
        $user->name = $req->name; //getting the name from the request
        $user->designation = $req->designation; //getting the designation from the request
        $user->bio = $req->bio; //getting bio from request
        $user->registered_as = $req->accountType; //getting registered_as from request
        $user->contact_email = $req->contact_email; //getting the email from the request

        if ($req->file("file_path")) {
            $user->file_path = $req->file("file_path")-> store("users"); //getting the image from the request
        }
        $user->save(); //saving the product to the database
        return $user; //returning the product
    }

    function updatePassword($id,Request $req)
    {
        $user = User::find($req->id); //finding the user with the id
        $newpassword = $req->input("newpassword");
        if (Hash::check($req->input("oldpassword"), $user->password)) {
            $user->password = Hash::make($newpassword); //getting the password from the request
            $user->save(); //saving the user to the database
            return ["result" => "Password has been changed"];
        } else {
            return ["result" => "Old password does not match"];
        }
    }

    function becomeSeller($id,Request $req)
    {
        $user = User::find($req->id); //finding the user with the id
        $user->designation = $req->designation; //getting the designation from the request
        $user->bio = $req->bio; //getting bio from request
        $user->contact_email = $req->contact_email; //getting contact email from request
        $user->cv = $req->file("cv")-> store("users"); //getting the image from the request  
        $user->file_path = $req->file("file_path")-> store("users"); //getting the image from the request
        $user->occupation = $req->occupation; //getting occupation from request
        $user->occupation_since = $req->occupation_since; //getting occupation since from request
        $user->degree = $req->degree; //getting degree from request
        $user->graduation_date = $req->graduation_date; //getting graduation date from request
        $user->proof_degree = $req->file("proof")-> store("users"); //getting the image from the request
        $user->ctznship = $req->file("ctzn")-> store("users"); //getting the image from the request
        $user->requested= "yes";  
        $user->save(); //saving the product to the database
        return $user; //returning the product
    }

    function getUserAll()
    {
        return User::all(); //returning all the users in the database
    }

    function verify($otp, Request $req)
    {
        $user = User::where('otp', $req->otp)->first();
        if($user) {
            if($user->otp == $req->otp) {
                $user->isVerified = 'yes';
                $user->otp = '';
                $user->save();
                return $user;
            } else {
               return response()->json(['error' => 'OTP not match'], 401);
            }
        } else {
            return response()->json(['error' => 'OTP not match'], 401);
        }
    }


    function verifyCtzn($id, Request $req)
    {
        $user = User::find($req->id); //finding the user with the id
        $user->ctzn_verified = 'yes';
        $user->registered_as = 'seller';
        $user->requested = 'no';
        $user->admin_message = null;
        $user->save(); //saving to the database
        
        $notification = new NotificationHistory;
        $notification->user_id = $req->id;
        $notification->notification = "Your request for 'Become a Freelancer' has been approved";
        $notification->save();
        return $user; //returning the user
    }

    function declineCtzn($id,Request $req)
    {
        $user = User::find($req->id); //finding the user with the id
        $user->ctzn_verified = 'no';
        $user->admin_message = $req->admin_message;
        $user->ctznship = '';
        $user->requested = 'no';
        $user->registered_as = 'client';
        $user->save(); //saving to the database
        return $user; //returning the user
    }

    function viewCtznReq()
    {
        return User::where('requested', 'yes')

                    ->get(); //returning all the users in the database
    }

    function putKeywords($UserId,Request $req)
    {
        $user = User::find($UserId); //finding the user with the id
        $user->keywords = $req->keywords; //getting the keywords from the request
        $user->profile_setup = '1';
        $user->save(); //saving to the database
        return $user; //returning the user
    }


    function getRecommended($userId){
        $user = User::find($userId);
        $keywords = explode(',', $user->keywords);
        $products = Product::whereIn('category', $keywords)->get();
        return $products;
    }

    function getRecommendedSellers($userId){
        $user = User::find($userId);
        $keywords = explode(',', $user->keywords);
        $sellers = User::whereIn('occupation', $keywords)->get();
        return $sellers;
    }

    function searchUser($key)
    {
        return User::where("name", "like", "%".$key."%")->get(); //returning the products with the name that contains the key
    }

    
}
