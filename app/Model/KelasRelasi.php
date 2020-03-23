<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class KelasRelasi extends Model
{
    protected $table = 'kelas_relasi';
    public $fillable = ['id_siswa', 'id_kelas'];
    protected $hidden = [
    'updated_at', 'created_at'
    ];
    // public function user(){
    //     return $this->belongsTo('User');
    // }
    public function detailKelas(){
        return $this->belongsTo('App\Model\Kelas','id_kelas','id');
    }
}
