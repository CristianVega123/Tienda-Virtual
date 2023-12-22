<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class ValidationController extends Controller
{

    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $credentials = $request->validate([
            'email' => ["required", "email"],
            'password' => ["required"],
        ]);

        $email = $request->input("email");
        $password = $request->input("password");

        if (Auth::attempt([
            "email" => $email,
            "password" => $password,
            // fn (Builder $query) => $query->has("") 

        ])) {
            $user = Auth::user();
            $request->session()->regenerate();
            return response($user, 200);
        }

        return response()->json([
            'error' => 'Por favor, revisar si el email o contraseña son correctas.'
        ], 401);
    }
}
