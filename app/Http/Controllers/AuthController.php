<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class AuthController extends Controller
{
    public function getToken(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password,
        ];
        if (Auth::attempt($data) == true) {
            return response([
                'success' => true,
                'api_token' => Auth::user()->api_token,
                'user_data' => Auth::user()
            ], 200);
        } else {
            return response([
                'success' => false,
                'api_token' => null
            ], 401);
        }
    }
}
