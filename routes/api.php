<?php

use App\Http\Controllers\NumberValidationControllers;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * ? Ruta con resources apis, que será acerca de los datos del usuario.
 */

Route::post('/create_client', [UserController::class, "storeUser"]);

/**
 * ? Ruta para crear un número que será enviado hacia su email para verficar el correo.
 */
Route::get("/generated_validation", NumberValidationControllers::class);


/**
 * ? Validacion de la clave númerica enviado al email del usuario.
 */

//  Route::post("", );

