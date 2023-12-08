<?php

namespace App\Http\Controllers;

use App\Enums\UserRole;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, User $user) 
    {
        $validate = $request->validate([
            'user_name' => 'required|string|max:100',
            'user_surname' => 'required|string|max:100',
            'user_email' => 'required|email:rfc,dns|max:100',
            'user_password' => 'required',
            'user_valid' => 'boolean'
        ]);


        $hashed = Hash::make($request->input("user_password"));
        $roleDefault = UserRole::USER->value;

        $person = User::created([
            'user_name' => $request->input('user_name'),
            'user_surname' => $request->input('user_surname'),
            'user_email' => $request->input('user_email'),
            'user_password' => $hashed,
            'user_valid' => $request->input('user_valid'),
            'user_role' => $roleDefault,
        ]);

        return response($person, '201');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
