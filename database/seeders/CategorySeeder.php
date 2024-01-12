<?php

namespace Database\Seeders;

use App\Enums\CategoryProduct;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("category")->insert([
            'category_name' => CategoryProduct::TECH->value
        ]);
        DB::table("category")->insert([
            'category_name' => CategoryProduct::PHONE->value
        ]);
        DB::table("category")->insert([
            'category_name' => CategoryProduct::CLOTH->value
        ]);
        DB::table("category")->insert([
            'category_name' => CategoryProduct::TV->value
        ]);
    }
}
