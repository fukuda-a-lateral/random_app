<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Genre;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //カテゴリーのidを取得する
        $category_1=Category::firstOrCreate(['name'=>'ご飯']);
        $category_2=Category::firstOrCreate(['name'=>'自然']);
        $category_3=Category::firstOrCreate(['name'=>'読書']);

        Genre::create(['name'=>'モーニング','category_id'=>$category_1->id]);
        Genre::create(['name'=>'ランチ','category_id'=>$category_1->id]);
        Genre::create(['name'=>'山','category_id'=>$category_2->id]);
        Genre::create(['name'=>'海','category_id'=>$category_2->id]);
        Genre::create(['name'=>'その他','category_id'=>$category_2->id]);
        Genre::create(['name'=>'ミステリー','category_id'=>$category_3->id]);
        Genre::create(['name'=>'エッセイ','category_id'=>$category_3->id]);





    }
}
