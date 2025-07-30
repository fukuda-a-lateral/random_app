<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Genre extends Model
{
    //
    protected $fillable =[
        'name',
        'category_id'
    ];

    //1つのジャンルは1つのカテゴリーに属する（genreは子）

    public function category(){
        return $this->belongsTo(Category::class);
    }

    //複数のジャンルが複数のカードと紐づく。多対多の関係
    public function card(){
        return $this->belongsToMany(Card::class,'card_genre','genre_id','card_id');
    }
}
