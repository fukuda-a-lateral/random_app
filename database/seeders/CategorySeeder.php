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
        Category::create(['name'=>'自然','user_id'=>'1']);
        Category::create(['name'=>'読書','user_id'=>'1']);
        Category::create(['name'=>'映画','user_id'=>'1']);
        Category::create(['name'=>'漫画','user_id'=>'1']);
        //
    }
}
