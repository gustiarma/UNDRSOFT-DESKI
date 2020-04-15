<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InfoSiswa extends Model
{
    protected $table = 'info_siswa';

    protected $fillable = [
        'id_siswa',
        'nomor_induk',
        'nomor_hp',
        'agama',
        'alamat',
        'id_orangtua',
        'foto',

    ];
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $casts = [
        'id' => 'string',

    ];

    protected $hidden = [
        'id_siswa', 'created_at', 'updated_at'

    ];
    public function user()
    {
        return $this->belongsTo('App\User', 'id_siswa', 'id');
    }
}
