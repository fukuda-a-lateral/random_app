<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('app');
// });

Route::get('/{any?}', function () { // {any?} で / も /hoge も受け止める
    return view('app'); // app.blade.php を返す
})->where('any', '.*');
