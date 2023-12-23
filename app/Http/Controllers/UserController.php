<?php

namespace App\Http\Controllers;

use App\Enums\UserRole;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
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
    public function storeUser(Request $request, User $user)
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

        Auth::login($person);

        /**
         * ? Valor creado, que solo estará valido para una sola request, para verificar el usuario 
         * ? Si y solo si el user_valid es false, entonces no hay necesidad de crear un valor para poder verificar la cuenta
         */
        $accept = $request->input("accept");
        if ($accept) {
            session()->flash("word_valid", );
        }
        
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
