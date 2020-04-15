<?php

namespace App\Http\Controllers;

use App\Model\MataPelajaran;
use App\Model\Materi;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class MateriController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $data =  Materi::all();
            return response([
                'success' => true,
                'data' => $data
            ], 200);
        } catch (\Throwable $th) {
            return response([
                'success' => false,
                'data' => [
                    'code' => $th->getCode(),
                    'msg' => $th->getMessage(),
                ]
            ], 201);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $id = ($request->id ? $request->id : null);
        if (!$request->hasFile('file')) {
            return response([
                'success' => false,
                'msg' => 'File must provided'
            ], 201);
        }
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'kode' => 'required',
        ]);

        if ($validator->fails()) {
            return response([
                'success' => false,
                'msg' => $validator->errors()
            ], 201);
        }

        $file = $request->file('file');
        // $array = [
        //     "originalNameWithExt" => $file->getClientOriginalName(),
        //     "extension"=>$file->getClientOriginalExtension(),
        //     "hasName"=>$file->hashName(),

        // ];
        $filename = $file->hashName();
        $storedFile =  $request->file('file')->storeAs('materi', $filename);
        if ($storedFile) {
            try {
                $materi = (isset($request->id) ? Materi::findOrFail($request->id) : new Materi(['id' => Str::uuid()]));
                // $materi = (isset($request->id) ? 'disini' : 'disana');
                $store = [
                    // 'id' => Str::uuid(),
                    'name' => $request->name,
                    'kode' => $request->kode,
                    'link' => $filename
                ];
                $materi->fill($store);
                $materi->save();
            } catch (\Throwable $th) {
                return $th->getMessage();
            }
            // try {
            //     Materi::updateOrCreate(['id' => $id], [
            //         ''
            //     ]);
            // } catch (\Throwable $th) {
            //     //throw $th;
            // }
            return response(
                [
                    'success' => false,
                    'filename' => $filename
                ],
                200
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Materi  $materi
     * @return \Illuminate\Http\Response
     */
    public function show(Materi $materi, $kode)
    {

        try {
            $mapel =  MataPelajaran::with('materi')->where('id', $kode)->first();
            return response([
                'success' => true,
                'data' => $mapel
            ], 200);
        } catch (\Throwable $th) {
            return response([
                'success' => false,
                'error' => [
                    'kode' => $th->getCode(),
                    'msg' => $th->getMessage()
                ]
            ], 201);
        }
    }
    public function get(Materi $materi, $kode)
    {

        try {
            $mapel =  Materi::findOrFail($kode);
            return response([
                'success' => true,
                'data' => $mapel
            ], 200);
        } catch (\Throwable $th) {
            return response([
                'success' => false,
                'error' => [
                    'kode' => $th->getCode(),
                    'msg' => $th->getMessage()
                ]
            ], 201);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Materi  $materi
     * @return \Illuminate\Http\Response
     */
    public function edit(Materi $materi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Materi  $materi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Materi $materi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Materi  $materi
     * @return \Illuminate\Http\Response
     */
    public function destroy(Materi $materi)
    {
        //
    }
}
