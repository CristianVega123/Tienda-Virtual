<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * ? Función para mostrar todos los productos.
     */
    public function show_product()
    {
        $products = DB::table("products")
            ->join("category", 'category.category_id', '=', 'products.category_id')
            ->select("products.prod_id", "products.prod_name" ,"products.prod_price", "products.prod_units", "products.prod_description", 'category.category_name')
            ->get();

        // $collect_products = collect();
        // $products = Product::with('category')->get();

        // foreach ($variable as $key => $value) {
        //     # code...
        // }
        return $products;
    }
}
