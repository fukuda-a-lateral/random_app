<?php

namespace App\Http\Controllers;
use App\Models\Category;


use Illuminate\Http\Request;

class GenreController extends Controller
{
    //
    public function get_genre($category_id){
        //categoryModelを取得するときに関連するjenresも一緒に取得（EagerLoarding)
        // joinせずに２テーブルに対して各セレクト文を発行し紐づけてくれる
      $category = Category::with('genres')->findOrFail($category_id);
      //$categoryにはcategoryテーブルの該当１行＋genresテーブルの紐づくデータがgenresというプロパティ名で配列で入ってる
      return response()->json($category->genres);
    }
        //$categoryはこんな感じでデータが入る
        //       {
        //   "id": 1,
        //   "name": "カテゴリーA",
        //   "created_at": "...",
        //   "updated_at": "...",
        //   "genres": [
        //     {
        //       "id": 101,
        //       "category_id": 1,
        //       "name": "ジャンルX",
        //       "created_at": "...",
        //       "updated_at": "..."
        //     },
        //     {
        //       "id": 102,
        //       "category_id": 1,
        //       "name": "ジャンルY",
        //       "created_at": "...",
        //       "updated_at": "..."
        //     }
        //   ]
        // }
}
