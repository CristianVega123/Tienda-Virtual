<?php

namespace App\Http\Controllers;

use App\Enums\UserRole;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
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
    public function create(Request $request, User $user)
    {
        $validate = $request->validate([
            'user_name' => 'required|string|max:100',
            'user_surname' => 'bail|required|string|max:100',
            'user_email' => 'required|email:rfc,dns|max:100|unique:App\\Models\\User,email',
            'user_password' => 'required',
            'accept' => 'boolean'
        ]);


        $hashed = Hash::make($request->input("user_password"));
        $roleDefault = UserRole::USER->value;
        // dd();

        $person = User::create([
            'user_name' => $request->input('user_name'),
            'user_surname' => $request->input('user_surname'),
            'email' => $request->input('user_email'),
            'password' => $hashed,
            'user_valid' => false,
            'user_role' => $roleDefault,

        ]);

        //? Por alguna razón, he estado teniendo problemas con el Laravel Sanctum y su autentificación basado en cookies. Creo que son los por guard, y era algo que no sabía nada jaja, bueno necesito investigar más sobre el tema de autentificación.

        Auth::login($person);

        $user = Auth::user();

        return response()->json([
            'user_created' => $user
        ], 201);
    }


    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ["required", "email"],
            'password' => ["required"],
        ]);

        $email = $request->input("email");
        $password = $request->input("password");

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $request->session()->regenerate();
            return response($user, 200);
        }

        return response()->json([
            'error' => 'Por favor, revisar si el email o contraseña son correctas.'
        ], 401);
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
    public function logout(Request $request)
    {


        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
        return response(200);
    }
}
