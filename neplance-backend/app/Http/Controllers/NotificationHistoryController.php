<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NotificationHistory;

class NotificationHistoryController extends Controller
{
    function addNotification (Request $req) {
        $notification = new NotificationHistory;
        $notification->user_id = $req->user_id;
        $notification->notification = $req->notification;
        $notification->save();
        return $notification;
    }

    function getNotification ($id) {
        $notification = NotificationHistory::where('user_id', $id)
            ->orderBy('id', 'desc')
            ->take(5)
            ->get();
        return $notification;
    }
}
