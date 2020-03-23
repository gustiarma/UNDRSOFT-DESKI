<?php

namespace App\Http\Controllers;

use App\Model\InfoSiswa;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Model\KelasRelasi;
use App\Model\OrangTua;

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
            // $info =  User::with('InfoSiswa')::with('KelasRelasi')->find(Auth::id());
            $user = User::find('1');
            $infoSiswa = InfoSiswa::where('id_siswa', $user->id)->first();
            $infoOrtu = User::where('id', $infoSiswa->id_orangtua)->first();
            $data = [
                'info_dasar' => $user,
                'info_siswa' => $infoSiswa,
                'info_kelas' => KelasRelasi::where('id_siswa', $user->id)->first()->DetailKelas,
                'info_ortu' => $infoOrtu
            ];
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
                    'msg' => "Fail to fetc user info"
                ], 200);
            }
        }
    }


    public function random()
    {
        if (env('APP_ENV') == 'production') {
            die;
        }


        // return User::with(['InfoSiswa','InfoKelas.DetailKelas'])->first();
        $user = User::find('1');
        $infoSiswa = InfoSiswa::where('id_siswa', $user->id)->first();
        $infoOrtu = User::where('id', $infoSiswa->id_orangtua)->first();
        return response([
            'api_token' => $user->api_token,
            'info_dasar' => $user,
            'info_siswa' => $infoSiswa,
            'info_kelas' => KelasRelasi::where('id_siswa', $user->id)->first()->DetailKelas,
            'info_ortu' => $infoOrtu
        ], 200);

        // $info = DB::table('users')
        // ->where('level', 'SISWA')
        // // ->where('users.id', Auth::id())
        // ->leftJoin('info_siswa', 'users.id', 'info_siswa.id_siswa')
        // ->leftJoin('info_ortu',  'info_siswa.id_orangtua', 'info_ortu.id',)
        // ->leftJoin('users',  'users.id' ,'info_siswa.id_orangtua' )
        // // ->leftJoin('kelas_relasi', 'kelas_relasi.id_siswa', 'users.id')
        // // ->leftJoin('kelas', 'kelas.id', 'kelas_relasi.id_kelas')
        // // ->select([
        // //     'users.email',
        // //     'users.name',
        // //     'info_siswa.nomor_induk',
        // //     'info_siswa.nomor_hp',
        // //     'info_siswa.agama',
        // //     'info_siswa.alamat',
        // //     'info_siswa.id_orangtua',
        // //     'info_siswa.foto',
        // //     'kelas.nama_kelas',
        // //     'kelas.semester',
        // //     'kelas.wali_kelas',
        // //     'kelas.info',
        // //     'info_ortu.nama as nama_ortu'
        // // ])
        // ->get();

        // return $info;
    }
}
