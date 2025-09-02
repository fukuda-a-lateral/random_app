<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genre;
use App\Models\Card;
use App\Http\Requests\CardRequest;
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

    public function register_card(CardRequest $request){
        // バリデーション済みのリクエストを受け取る
        $data = $request->validated();
        // リクエストからジャンルを切り離す（Cardテーブルにgenreカラムがないから）
        $genres = $data['genres'];
        unset($data['genres']);
        // 定休日が配列で来るのでjson(文字列)に変換する
        // Modelにprotected $casts =['close'=>'array']を追加したので不要
        // $data['close'] = json_encode($data['close']);
        // リクエストにない項目を追加
        $data['count']=0;
        $data['done']=0;
        // Cardテーブルにデータを追加
        $card = Card::create($data);

        // cardModelに設定したbelongToManyを設定したgenresメソッドを使う
        // card_genreテーブルからこのカードidに紐づいたジャンルを全て削除
        // 新しく渡されたgenresを使ってcard_genreテーブルにデータを追加する
        // $cardには新しく追加した1件分のデータが入っているのでそれに紐づくように動く
        $card->genres()->sync($genres);

        return response()->json(['message'=>'カードが登録されました'],201);

        // $card->title = $request->title;
        // $card->description = $request->description;
        // $card->url = $request->url;
        // $card->img = $request->img;
        // $card->location = $request->location;
        // $card->start = $request->start;
        // $card->end = $request->end;
        // $card->close = json_encode($request->close);
        // $card->level = $request->level;
        // $card->save();

        // 中間テーブルにデータ登録する方法がイマイチ分からない。
        // リレーション設定してるからそのまま行けるのか・・・？
        // $card->genres()->genre_id = $params->genre;



    }
}
