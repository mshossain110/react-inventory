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
        Schema::create('product_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->index()->cascadeOnDelete();
            $table->foreignId('provider_id')->nullable()->index()->constrained('providers')->nullOnDelete();
            $table->foreignId('warehouse_id')->index()->constrained('warehouses')->cascadeOnDelete();
            $table->string('identity')->nullable();
            $table->unsignedInteger('buy_price')->nullable()->default(0);
            $table->unsignedInteger('sell_price')->nullable();
            $table->unsignedInteger('profit')->default(0);
            $table->string('status', 50)->nullable()->index();
            $table->dateTime('sold_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_items');
    }
};
