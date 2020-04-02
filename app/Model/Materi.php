<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
    protected $table = 'bahanajar';
    public $timestamps = false;
    protected $hidden = [
        'created_at','updated_at'

    ];
}
