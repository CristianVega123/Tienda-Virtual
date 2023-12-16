<?php

namespace App\Http\Controllers;

use App\Mail\VerifyEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Mail;

/**
 *  * Features de la clase: Generar los 5 digitos de clave de validación, luego este se enviará hacia su email
 */

class NumberValidationControllers extends Controller
{
    public function __invoke(Request $request) {

    }
}
