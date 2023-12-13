<?php

namespace App\Http\Controllers;

use App\Enums\UserRole;
use App\Mail\VerifyEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

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
    public function storeUser(Request $request, User $user)
    {
        $validate = $request->validate([
            'user_name' => 'required|string|max:100',
            'user_surname' => 'required|string|max:100',
            'user_email' => 'required|email:rfc,dns|max:100|unique:App\\Models\\User,user_email',
            'user_password' => 'required',
            'user_valid' => 'boolean'
        ]);


        $hashed = Hash::make($request->input("user_password"));
        $roleDefault = UserRole::USER->value;
        // dd();

        $person = User::create([
            'user_name' => $request->input('user_name'),
            'user_surname' => $request->input('user_surname'),
            'user_email' => $request->input('user_email'),
            'user_password' => $hashed,
            'user_valid' => $request->input('user_valid'),
            'user_role' => $roleDefault,
        ]);


        // session([
        //     "id_user" => $person->user_od,
        //     "role" => $person->user_role,
        // ]);


        return response()->json([
            'user_created' => $person
        ], 201);
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
