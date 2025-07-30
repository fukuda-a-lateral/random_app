<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Card;



class CardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Card::create([
            'title'=>'しゃもじ',
            'description'=>'とり天が美味しい店',
            'url'=>'aaa',
            'img'=>'',
            'count'=>0,
            'done'=>0,
            ]);
              Card::create([
            'title'=>'大観峰',
            'description'=>'熊本の景色が最高の場所',
            'url'=>'bbb',
            'img'=>'',
            'count'=>0,
            'done'=>0,
            ]);
    }
}
