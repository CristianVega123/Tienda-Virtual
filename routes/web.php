<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

use function PHPUnit\Framework\isNull;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Rendeiza el panel central para poder ver los productos 
//? O si no tienes cuenta, redirigirte para poder crear una cuenta
Route::get("/", fn () =>  view("index"));

Route::get("/register/{modeRegister?}", function (?string $modeRegister = null) {
    return view("index");
});

Route::get("/store/{section?}", function (?string $section = null) {
    return view('index');
});