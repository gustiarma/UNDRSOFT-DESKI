<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Kelas extends Model
{
    protected $table = 'kelas';
    public $timestamps = false;

    protected $hidden = [
        'updated_at', 'created_at'
        ];

}
