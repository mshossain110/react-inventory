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
        Schema::create('transections', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->nullableMorphs('transectable');
            $table->unsignedBigInteger('debit')->default(0)->comment("I had given");
            $table->unsignedBigInteger('credit')->default(0)->comment("Someone give to me");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transections');
    }
};
