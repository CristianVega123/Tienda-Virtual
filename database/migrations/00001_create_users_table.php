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
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements("user_id");
            $table->string("user_name", 110);
            $table->string("user_surname", 110);    
            $table->string("email", 120)->unique();
            $table->string("password", 150);
            $table->boolean("user_valid")->default(false);
            $table->enum('user_role', ['Admin', "Customer"]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
