<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Log; // これを追加



// この記述のせいでずっと正しいエントリポイントが叩かれていなかった！
// require __DIR__ . '/auth.php'; // ログイン、登録、パスワードリセットなどのルート

// SPAのフロントエンドエントリーポイント
// これが全てのGETリクエストの最後に評価されるようにする
Route::get('/{any}', function () { // `?` を外すか、必要に応じて `/` のみにする
    return view('app'); // app.blade.php を返す
})->where('any', '.*');

