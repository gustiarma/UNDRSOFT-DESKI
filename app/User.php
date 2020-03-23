<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'level', 'api_token',
    ];

    public $timestamps = false;
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'api_token','updated_at','created_at'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function infoSiswa()
    {
        return $this->hasOne('App\Model\InfoSiswa', 'id_siswa', 'id');
        // return $this->belongsTo('App\Model\InfoSiswa');
    }

    public function infoKelas(){
        return $this->hasOne('App\Model\KelasRelasi','id_siswa','id');
    }


    // public $timestamps = false;
}
