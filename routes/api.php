<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SendEmailValidationController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
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



//! Autentificación del usuario

Route::controller(AuthController::class)->group(function () {
    /**
     * ? Ruta con resources apis, que será acerca de los datos del usuario.
     */
    Route::post('/create_client', "create");

    /**
     * ? Controlador especifico para poder validar la session del usuario (que esta basada en el servicio de autentificación a vía cookies)
     */
    Route::post("/login",  "login");

    /**
     * ? Termina la session y la regenera para que se pueda logear de nuevo sin errores al anterior sesion
     */
    Route::post("/logout", "logout");
});


//! Verificación del Email
Route::controller(SendEmailValidationController::class)->group(function () {
    /**
     * ? Ruta para crear un número que será enviado hacia su email para verficar el correo.
     */
    Route::post("/generated_validation", "generate_number");

    /**
     * ? Validacion de la clave númerica enviado al email del usuario.
     */
    Route::post("/validate_token_email", "validate_token");
});



//! Acciones del usuario (dependiendo del role)
Route::prefix("admin")->controller(AdminController::class)->group(function () {

    /**
     *? Ruta para guardar las imagenes 
     */
    Route::post("/store_products", "store");


    Route::delete("/delete_products/{id}", "destroy");
});

Route::prefix("users")->controller(UserController::class)->group(function () {
    /**
     * ? Recuperamos todos los productos
     */
    Route::get("/products", "show_product");
});
