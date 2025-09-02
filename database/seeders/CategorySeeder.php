<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create(['name'=>'ご飯','user_id'=>'1']);
        Category::create(['name'=>'お出かけ','user_id'=>'1']);
        Category::create(['name'=>'アクティビティ','user_id'=>'1']);
        Category::create(['name'=>'インドア','user_id'=>'1']);
        Category::create(['name'=>'ホテルステイ','user_id'=>'1']);
        //
    }
}
