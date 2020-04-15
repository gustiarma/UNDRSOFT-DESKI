<?php

namespace App\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $appends = [
        'external_link',
    ];

    protected $casts = [
        'id' => 'string',

    ];

    protected $table = 'bahanajar';
    public $timestamps = false;
    protected $fillable = ['id', 'name', 'kode', 'link'];
    protected $hidden = [
        'created_at', 'updated_at'

    ];
    public function getExternalLinkAttribute()
    {
    //    str_contains('This is my name', 'my')
        return (Str::contains($this->attributes['link'],'http') ?  $this->attributes['link'] : asset('materi/' . $this->attributes['link']));
        //    return  asset('materi/'.$this->attributes['link']);
    }
}
