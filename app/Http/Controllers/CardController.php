<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genre;
use Illuminate\Support\Facades\Log;


class CardController extends Controller
{
    //genre_idに紐づくカード情報を取得し、ランダムで１件返す
    public function random_card($genre_id){
        // Genreモデルを取得するときに紐づくcardsテーブルのデータも取得
        // モデルに中間テーブル経由でGenresとcardsの関係性を記述しているのでこの記述が可能
        $genre = Genre::with('cards')->findOrFail($genre_id);
        $cards= $genre->cards;
        // $genreには引数で渡したgenre_idに該当するデータが１行分入っているだけ。cardsというプロパティはない
        // Laravelがcardsというプロパティにアクセスしようとしてないことに気づき、cards()メソッドを実行し新たにクエリを実行
        // 取得したデータを$genreのcardsプロパティに格納して、その値を返す
        // キャッシュとしてデータを一時保持してるのでアクセスするたびにDB実行されずに効率が良い
        // $genre->cards()でも良いが、$genre->cardsとの違いはメソッドを呼び出しただけでまだ実行されていない点（クエリビルダが返ってくる）
        // whereなどのクエリを追加したりできる。最後に->get()で実行しないと実行されない

        $random_card = $cards->random();
        return response()->json($random_card);
    }
}
