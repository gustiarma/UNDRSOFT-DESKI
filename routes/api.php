<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('getToken', 'AuthController@getToken');


Route::group(['prefix' => 'siswa'], function () {
    Route::get('list', 'SiswaController@listSiswa');
    Route::middleware('auth:api')->get('info', 'SiswaController@getInfo');

    // random
    Route::get('random', 'SiswaController@random');
});
