<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //前カテゴリーを取得
    public function get_category(){
        // カテゴリーModelを使ってカテゴリー全件取得
        $category = Category::all();
        return response()->json($category);

    }
}
