<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\User;
use Illuminate\Http\Request;
use App\Events\ChatMessageSent;
use App\Models\NotificationHistory;

class ChatController extends Controller
{
    public function sendMessage(Request $request, User $recipient)
    {
        $message = $request->input('message');
        $sender_id = $request->input('sender_id');

        // Get the sender user instance based on the sender ID
        $sender = User::find($sender_id);

        // Create a new chat message and set the sender ID
        $chat = new Chat([
            'sender_id' => $sender_id,
            'recipient_id' => $recipient->id,
            'message' => $message,
        ]);
        $chat->save();

        $notification = new NotificationHistory;
        $notification->user_id = $recipient->id;
        $notification->notification = "You have a new message from " . $sender->name;
        $notification->save();

        // Broadcast the chat message to other users
        event(new ChatMessageSent($message, $sender, $recipient));

        return response()->json(['status' => 'Message sent!']);
    }

    public function getMessages(User $recipient, $sender_id)
    {
        $messages = Chat::where(function ($query) use ($sender_id, $recipient) {
            $query->where('sender_id', $sender_id)
                ->where('recipient_id', $recipient->id);
        })->orWhere(function ($query) use ($sender_id, $recipient) {
            $query->where('sender_id', $recipient->id)
                ->where('recipient_id', $sender_id);
        })->orderBy('created_at', 'asc')->get();
    
        return response()->json(['messages' => $messages]);
    }


    public function getRecipients($recipient_id)
    {
        $recipients = Chat::where('recipient_id', $recipient_id)
            ->join('users', 'chats.sender_id', '=', 'users.id')
            ->select('users.id', 'users.name', 'users.file_path')
            ->distinct()
            ->get();
    
        return response()->json(['recipients' => $recipients]);
    }

}
