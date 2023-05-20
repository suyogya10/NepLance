<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FrequentlyAsked;

class FrequentlyAskedController extends Controller
{
    
    function addFAQ(Request $req){

        $faq = new FrequentlyAsked;
        $faq->question = $req->question;
        $faq->answer = $req->answer;
        $faq->link = $req->link;
        $faq->save();
        return $faq;
       }
    
        function getFAQ(){
             return FrequentlyAsked::all();
        }
    
        function deleteFAQ($id){
            $result = FrequentlyAsked::where('id',$id)->delete();
            if ($result){
                return['result'=>'FAQ Deleted!'];
            }else{
                return['result'=>'Operation Failed!'];
            }
        }
}
