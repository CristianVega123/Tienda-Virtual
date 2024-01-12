<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
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
     * ? Acá el ADMIN debe crear los recursos que se mostrará dentro de la tienda.
     */
    public function store(StoreUserRequest $request, Product $product)
    {

        //* El archivo que manda el cliente
        $fileValid = $request->safe()->only(['product_image']);


        //* Los demás datos que tiene que ser guardado en la tabla productos
        $portionProduct = $request->safe()->except(['product_image']);

        $categoryId = $portionProduct["category_id"];
        
        $name_folder = DB::table("category")->where("category_id", $categoryId)->value("category_name");

        $UploadFileURL = cloudinary()->upload($fileValid["product_image"]->getRealPath(), [
            "folder" => $name_folder 
        ])->getSecurePath();
        

        $product = Product::create([
            'prod_name' => $portionProduct["product_name"],
            'prod_price' => $portionProduct["product_price"],
            'prod_units' => $portionProduct["product_units"],
            'prod_description' => $portionProduct["product_description"],
            'prod_url_img' => $UploadFileURL,
            'category_id' => $categoryId,
        ]);
        
        return response()->json([
            "url" => $UploadFileURL,
            'product' => $product, 
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
