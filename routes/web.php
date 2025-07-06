<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function () { // {any?} で / も /hoge も受け止める
    return view('app'); // app.blade.php を返す
})->where('any', '.*');

require __DIR__ . '/auth.php';


//BreezeAPIインストールした際の自動記述
//Laravel側をAPI特化で使う想定でhtmlではなくてただLaravelのバージョンを返すだけにしている
// Route::get('/', function () {
//     return ['Laravel' => app()->version()];
// });
