<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\User;
use App\Models\Chat;
use Illuminate\Support\Facades\Log;

class ChatMessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;
    public $sender;
    public $recipient;

    public function __construct($message, User $sender, User $recipient)
    {
        $this->message = $message;
        $this->sender = $sender;
        $this->recipient = $recipient;
    }

    public function broadcastOn()
    {
        return new PrivateChannel('chat.' . $this->recipient->id);
    }
}

