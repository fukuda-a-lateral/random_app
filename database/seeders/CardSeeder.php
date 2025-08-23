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
            'location'=>'',
            'start'=>'',
            'end'=>'',
            'close'=>'',
            'k_1'=>'',
            'k_2'=>'',
            'k_3'=>'',
            'k_4'=>'',
            'k_5'=>'',
            'count'=>0,
            'done'=>0,
            ]);
      Card::create([
            'title'=>'大観峰',
            'description'=>'景色が良い',
            'url'=>'https://aaaaa',
            'img'=>'',
            'location'=>'',
            'start'=>'',
            'end'=>'',
            'close'=>'',
            'k_1'=>'',
            'k_2'=>'',
            'k_3'=>'',
            'k_4'=>'',
            'k_5'=>'',
            'count'=>0,
            'done'=>0,
            ]);
    }
}
