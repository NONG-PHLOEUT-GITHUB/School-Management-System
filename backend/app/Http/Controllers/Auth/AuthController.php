<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Login user and return a token
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if ($token = auth()->guard('api')->attempt($credentials)) {
            $user = auth()->user();
            return response()->json([
                'status' => 'success',
                'user' => $user,
                'access_token' => $token,
            ], 200)
            ->header('Authorization', $token)
            ->header('X-Auth-Login-Time', now()->toDateTimeString());
        }
        return response()->json(['error' => 'login_error'], 401);
    }
    /**
     * Logout User
     */
    public function logout()
    {
        $this->guard()->logout();
        return response()->json([
            'status' => 'success',
            'msg' => 'Logged out Successfully.'
        ], 200);
    }
    /**
     * Get authenticated user
     */
    public function user(Request $request)
    {
        // $user = User::find(Auth::user()->id);
        // 'comments' => function ($query) {
        //     $query->join('users', 'comments.teacher_id', '=', 'users.id')
        //     ->select('comments.*', 'users.first_name', 'users.last_name');
        // }
        $user = User::with([
            'comments' => function ($query) {
                $query->join('users', 'comments.teacher_id', '=', 'users.id')
                ->select('comments.*', 'users.first_name', 'users.last_name','users.profile');
            }
        ])->find(Auth::user()->id);
        return response()->json([
            'status' => 'success',
            'data' => $user
        ]);
    }
    /**
     * Refresh JWT token
     */
    public function refresh()
    {
        if ($token = $this->guard()->refresh()) {
            return response()
                ->json(['status' => 'successs'], 200)
                ->header('Authorization', $token);
        }
        return response()->json(['error' => 'refresh_token_error'], 401);
    }
    /**
     * Return auth guard
     */
    private function guard()
    {
        return Auth::guard();
    }
}
