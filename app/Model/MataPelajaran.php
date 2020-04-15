<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MataPelajaran extends Model
{
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $casts = [
        'id' => 'string',

    ];

    protected $table = 'pelajaran';
    public $timestamps = false;
    protected $hidden = [
        'created_at', 'updated_at'

    ];

    public function materi(){
        return $this->hasMany('App\Model\Materi','kode','kode');
    }
    // mutator

}
