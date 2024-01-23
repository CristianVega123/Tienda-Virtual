<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class UserController extends Controller
{
    /**
     * ? Función para mostrar todos los productos.
     */
    public function show_product()
    {
        return Product::all();
    }
}
