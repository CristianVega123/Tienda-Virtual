<?php

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

// Route::get('/', function () {
//     return view('index');
// });



//? Rendeiza el panel central para poder ver los productos 
//? O si no tienes cuenta, redirigirte para poder crear una cuenta
Route::get("/", fn () =>  view("index", ["title" => "Tienda Virtual"]));

Route::get("/register/{modeRegister?}", function (?string $modeRegister = null) {
    
    $sliceParams = explode("_", $modeRegister);
    $title_params_join = join(" ", $sliceParams);
    // dd($title_params_join);
    
    return view("index", ["title" => $title_params_join]);
})->whereIn("modeRegister", ["Log_in", "Sign_up"]);

Route::get("/products", function () {
    return view('index', ["title" => "Productos"]);
});
