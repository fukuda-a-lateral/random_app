<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    protected $fillable=[
        'name','user_id'
    ];

    //以下リレーションなどを定義できる
    public function genres(){
        return $this->hasMany(Genre::class);
    }

    public function user(){

        return $this->belongsTo(User::class);
    }
}
