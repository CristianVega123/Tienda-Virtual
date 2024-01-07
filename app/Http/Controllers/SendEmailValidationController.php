<?php

namespace App\Http\Controllers;

use App\Mail\VerifyEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class SendEmailValidationController extends Controller
{

    /**
     * Handle the incoming request.
     */
    public function generate_number(Request $request)
    {

        $credentials = $request->validate([
            "accept" => "boolean"
        ]);
        $accept = $request->input("accept");
 
        if(Auth::check()) {
            if($accept){
                $number = "";

                for ($i=0; $i < 4 ; $i++) { 
                    
                    $number .= strval(rand(1, 10));
                }
                session()->flash("number_verify", $number);

                Mail::to($request->user())->send(new VerifyEmail($number));
            } 

            return response($accept);
        }

        return response("", 401);
    }

    public function validate_token(Request $request)
    {
        $credentials = $request->validate([
            "token_valid" => "numeric"
        ]);

        $token_valid = $request->input("token_valid");
        $token_flash = session("number_verify");

        if ($token_valid == $token_flash && Auth::check()) {

            $user = $request->user();

            $user_verified = User::find($user->user_id);

            $user_verified->user_valid = true;
            $user_verified->save();
            
            return response()->json("success", 200);
        }

        return response()->json([
            "flash" => $token_flash,
            "input" => $token_valid,
            "error" => "intentalo de nuevo"
        ]);

    }
}
