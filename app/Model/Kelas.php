<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Kelas extends Model
{
    protected $primaryKey = 'id';
    protected $keyType = 'string';
       public $incrementing = false;

     protected $casts = [
            'id' => 'string',

        ];

    protected $table = 'kelas';
    public $timestamps = false;

    protected $hidden = [
        'updated_at', 'created_at'
        ];

}
