<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InfoSiswa extends Model
{
    protected $table = 'info_siswa';

    protected $hidden = [
        'id_siswa','created_at','updated_at'

    ];
    public function user(){
        return $this->belongsTo('App\User','id_siswa','id');
    }
}
