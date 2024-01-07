<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SendEmailValidationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware("auth:sanctum")->get('/user', function (Request $request) {
    return Auth::user();
});





/**
 * ? Ruta con resources apis, que será acerca de los datos del usuario.
 */


Route::post('/create_client', [AuthController::class, "create"]);

/**
 * ? Controlador especifico para poder validar la session del usuario (que esta basada en el servicio de autentificación a vía cookies)
 */
Route::post("/login", [AuthController::class, "login"]);

/**
 * 
 */

 Route::post("/logout", [AuthController::class, "logout"]);
 



/**
 * ? Ruta para crear un número que será enviado hacia su email para verficar el correo.
 */
Route::post("/generated_validation", [SendEmailValidationController::class, "generate_number"]);


/**
 * ? Validacion de la clave númerica enviado al email del usuario.
 */

 Route::post("/validate_token_email", [SendEmailValidationController::class, "validate_token"] );

