<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function fileUpload(Request $request)
    {
        return asset('materi/aIW1BRua3IIWsJFxO0Kbx7dbCA0bsKxdFNEdkECe.png');
        // return $request;
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $array = [
                "originalNameWithExt" => $file->getClientOriginalName(),
                "extension"=>$file->getClientOriginalExtension(),
                "hasName"=>$file->hashName(),

            ];
            $filename = $file->hashName();
            $storedFile =  $request->file('file')->storeAs('materi',$filename,);
            return asset($storedFile);
            return $array;
        }


        // return '<img src="' . $gambar . '" alt="" class="src">';
        // return $request->gambar->;

    }
}
