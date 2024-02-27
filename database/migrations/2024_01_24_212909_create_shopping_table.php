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
        Schema::create('shopping', function (Blueprint $table) {
            $table->bigIncrements("shop_id");
            $table->foreignId("user_id")->nullable()->constrained("users","user_id")->cascadeOnDelete();
            $table->foreignId("prod_id")->nullable()->constrained("products", "prod_id")->nullOnDelete();
            $table->integer("shop_amount");
            $table->double("shop_subtotal", 8, 2);
            $table->double("shop_netprice", 8, 2);
            $table->timestamp("shopped_at");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shopping');
    }
};
