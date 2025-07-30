<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Card extends Model
{
    //
    protected $fillable = [
        'title',
        'description',
        'url',
        'img',
        'count',
        'done',
    ];
    public function genres(){
        // Cardモデルは複数のGenreモデルと多対多の関係を持つ
        // 中間テーブル 'card_genre' を経由する
        return $this->belongsToMany(Genre::class, 'card_genre', 'card_id', 'genre_id');
        // 第二引数: 中間テーブル名（'card_genre'）
        // 第三引数: 現在のモデル（Card）が中間テーブルで参照される外部キー名（'card_id'）
        // 第四引数: 関連するモデル（Genre）が中間テーブルで参照される外部キー名（'genre_id'）
    }
}
