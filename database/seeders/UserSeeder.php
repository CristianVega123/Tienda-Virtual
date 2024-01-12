<?php

namespace Database\Seeders;

use App\Enums\UserRole;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'user_name' => 'Cristian',
            'user_surname' => 'Vega Lévano',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin'),
            'user_valid' => true, 
            'user_role' => UserRole::ADMIN->value
        ]);
    }
}
