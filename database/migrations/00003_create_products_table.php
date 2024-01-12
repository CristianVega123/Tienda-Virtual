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
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements("prod_id");
            $table->string("prod_name", 120);
            $table->float("prod_price");
            $table->integer("prod_units");
            $table->text("prod_description");
            $table->text("prod_url_img");
            $table->foreignId("category_id")->nullable()->constrained("category", "category_id")->cascadeOnDelete();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
