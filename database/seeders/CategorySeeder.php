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
        Category::create(['name'=>'ご飯にする？','user_id'=>'1']);
        Category::create(['name'=>'お出かけにする？','user_id'=>'1']);
        Category::create(['name'=>'アクティビティにする？','user_id'=>'1']);
        Category::create(['name'=>'お家を楽しむ？','user_id'=>'1']);
        Category::create(['name'=>'宿を楽しむ？','user_id'=>'1']);
        //
    }
}
