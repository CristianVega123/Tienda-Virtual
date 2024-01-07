<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CreatedUserTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_create_user(): void
    {
        $response = $this->postJson('/api/create_client', [
            'user_name' => 'Cristian',
            'user_surname' => 'Vega Lévano',
            'user_email' => 'cristiafaf@gmail.com',
            'user_password' => "adminCris",
            'user_valid' => 0
        ]);



        $response->assertStatus(201);
    }
}
