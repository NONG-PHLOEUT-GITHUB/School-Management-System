<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TelegramController extends Controller
{
    public function sendMessage(Request $request)
    {
        // Validate the request
    
        $chatId = $request['chat_id'];
        $messageText = $request['text'];;
        // Send a message to the user
        $response = Http::post("https://api.telegram.org/bot" . config('services.telegram.token') . "/sendMessage", [
            'chat_id' => $chatId,
            'text' => $messageText,
        ]);
        // dd($response);
        if ($response->ok()) {
            return response()->json(['status' => 'success']);
        } else {
            return response()->json(['status' => 'error', 'message' => 'Failed to send message']);
        }
    }
}
