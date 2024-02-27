<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * 
     */
    public function up(): void
    {
        Schema::create('media', function (Blueprint $table) {
            $table->bigIncrements('media_id');
            $table->string('public_id', 100);
            $table->string('resource_type', 30);
            $table->text('url_img');
            $table->text('url_img_secure');
            $table->string('original_filename', 100);
            $table->string('asset_folder', 50);
            $table->timestamp('created_at', $precision = 0);
            $table->foreignId('prod_id')->constrained('products', 'prod_id')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('media');
    }
};
