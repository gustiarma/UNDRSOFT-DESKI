<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class SiswaController extends Controller
{
    public function listSiswa()
    {

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
                ], 200);
            } else {
                return response([
                    'success' => false,
                    'msg' => "Fail to fetch student list"
                ], 200);
            }
        }
    }

    public function getInfo(Request $request)
    {
        try {
            // $info =  User::find(Auth::id())->infoSiswa;
            $info =  User::with('InfoSiswa')->find(Auth::id());
            return response([
                'success' => true,
                'data' => $info
            ], 200);
        } catch (\Throwable $th) {
            if (env('APP_ENV') !== 'production') {
                return response([
                    'success' => false,
                    'msg' => $th->getMessage()
                ], 200);
            } else {
                return response([
                    'success' => false,
                    'msg' => "Fail to fetc user info"
                ], 200);
            }
        }
    }
}
