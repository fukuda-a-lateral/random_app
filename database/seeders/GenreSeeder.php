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
        $category_1=Category::firstOrCreate(['id'=>1]);
        $category_2=Category::firstOrCreate(['id'=>2]);
        $category_3=Category::firstOrCreate(['id'=>3]);
        $category_4=Category::firstOrCreate(['id'=>4]);
        $category_5=Category::firstOrCreate(['id'=>5]);

        Genre::create(['name'=>'和食','category_id'=>$category_1->id]);
        Genre::create(['name'=>'洋食','category_id'=>$category_1->id]);
        Genre::create(['name'=>'中華','category_id'=>$category_1->id]);
        Genre::create(['name'=>'ラーメン','category_id'=>$category_1->id]);
        Genre::create(['name'=>'エスニック','category_id'=>$category_1->id]);
        Genre::create(['name'=>'食べ放題','category_id'=>$category_1->id]);
        Genre::create(['name'=>'スイーツ','category_id'=>$category_1->id]);
        Genre::create(['name'=>'その他','category_id'=>$category_1->id]);

        Genre::create(['name'=>'カフェ','category_id'=>$category_2->id]);
        Genre::create(['name'=>'公園','category_id'=>$category_2->id]);
        Genre::create(['name'=>'雑貨屋さん','category_id'=>$category_2->id]);
        Genre::create(['name'=>'絶景スポット','category_id'=>$category_2->id]);
        Genre::create(['name'=>'ミュージアム','category_id'=>$category_2->id]);
        Genre::create(['name'=>'神社','category_id'=>$category_2->id]);
        Genre::create(['name'=>'その他','category_id'=>$category_2->id]);

        Genre::create(['name'=>'スポーツ','category_id'=>$category_3->id]);
        Genre::create(['name'=>'温泉（日帰り）','category_id'=>$category_3->id]);
        Genre::create(['name'=>'登山','category_id'=>$category_3->id]);
        Genre::create(['name'=>'ワークショップ','category_id'=>$category_3->id]);
        Genre::create(['name'=>'キャンプ','category_id'=>$category_3->id]);
        Genre::create(['name'=>'その他','category_id'=>$category_3->id]);

        Genre::create(['name'=>'映画','category_id'=>$category_4->id]);
        Genre::create(['name'=>'ドラマ','category_id'=>$category_4->id]);
        Genre::create(['name'=>'アニメ','category_id'=>$category_4->id]);
        Genre::create(['name'=>'料理','category_id'=>$category_4->id]);
        Genre::create(['name'=>'読書','category_id'=>$category_4->id]);
        Genre::create(['name'=>'その他','category_id'=>$category_4->id]);

        Genre::create(['name'=>'温泉旅館','category_id'=>$category_5->id]);
        Genre::create(['name'=>'ロッジ','category_id'=>$category_5->id]);
        Genre::create(['name'=>'ラグジュアリーホテル','category_id'=>$category_5->id]);
        Genre::create(['name'=>'健康ランド','category_id'=>$category_5->id]);
        Genre::create(['name'=>'民泊','category_id'=>$category_5->id]);
        Genre::create(['name'=>'その他','category_id'=>$category_5->id]);







    }
}
