<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MataPelajaran extends Model
{
    protected $table = 'pelajaran';
    public $timestamps = false;
    protected $hidden = [
        'created_at','updated_at'

    ];
}
