<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class ApiController extends Controller
{
    /**
     * Siswa section
     *
     */

    /**
     * List siswa get by admin only
     */
    public function listSiswa()
    {

        if (Auth::user()->level !== 'ADMIN') {
            return response([
                'success' => false,
                'msg' => "Are you an admin ? "
            ], 201);
        }
        try {
            $data = User::where('level', 'siswa')->get();
            return response([
                'success' => true,
                'data' => $data
            ], 200);
        } catch (\Throwable $th) {
            if (env('APP_ENV') !== 'production') {
                return response([
                    'success' => false,
                    'msg' => $th->getMessage()
                ], 201);
            } else {
                return response([
                    'success' => false,
                    'msg' => "Fail to fetch student list"
                ], 201);
            }
        }
    }
}
