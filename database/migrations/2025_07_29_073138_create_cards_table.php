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
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description');
            $table->string('url');
            $table->string('img')->nullable();
            $table->string('location')->nullable();
            $table->string('open')->nullable();
            $table->string('close')->nullable();
            $table->string('level')->nullable();
            $table->string('k_1')->nullable();
            $table->string('k_2')->nullable();
            $table->string('k_3')->nullable();
            $table->string('k_4')->nullable();
            $table->string('k_5')->nullable();
            $table->integer('count');
            $table->integer('done');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cards');
    }
};
