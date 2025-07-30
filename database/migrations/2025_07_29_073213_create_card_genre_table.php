<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('card_genre', function (Blueprint $table) {
            // 1つのカードに同じジャンルが紐づかないように複合主キーにする
            //$table->id();が自動でunsignedBigInteger(符号なしの大きな整数)になるので合わせる
            $table->unsignedBigInteger('card_id');
            $table->unsignedBigInteger('genre_id');

            //外部キー制約の設定
            // card_idはcardsテーブルのidを参照
            // onDelete('cascade')は、親レコード（cards）が削除されたら、子レコード（card_genre）も削除されるようにする設定
            $table->foreign('card_id')->references('id')->on('cards')->onDelete('cascade');
            // genre_idはgenresテーブルのidを参照
            // foreignIdを使えばidとしての定義も同時にやれるので最初のcard_id,genre_idもまとめられる
            $table->foreign('genre_id')->references('id')->on('genres')->onDelete('cascade');

            $table->primary(['card_id','genre_id']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('card_genre');
    }
};
