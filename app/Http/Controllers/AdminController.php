<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Media;
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
    public function store(StoreProductRequest $request, Product $product)
    {

        //* El archivo que manda el cliente
        $fileValid = $request->safe()->only(['product_image']);


        //* Los demás datos que tiene que ser guardado en la tabla productos
        $portionProduct = $request->safe()->except(['product_image']);

        $categoryId = $portionProduct["category_id"];

        //? Los carpetas donde se almacenará las imagenes están nombradas con los nombres que están almacenados en la tabla category. 
        $name_folder = DB::table("category")->where("category_id", $categoryId)->value("category_name");

        $UploadFileURL = cloudinary()->upload($fileValid["product_image"]->getRealPath(), [
            "folder" => $name_folder
        ]);


        $product = Product::create([
            'prod_name' => $portionProduct["product_name"],
            'prod_price' => $portionProduct["product_price"],
            'prod_units' => $portionProduct["product_units"],
            'prod_description' => $portionProduct["product_description"],
            'category_id' => $categoryId,
        ]);


        $media = Media::create([
            'prod_id' => $product->prod_id, 
            'public_id' => $UploadFileURL->getPublicId(), 
            'resource_type' =>$UploadFileURL->getFileType(), 
            'url_img' => $UploadFileURL->getPath(), 
            'url_img_secure' => $UploadFileURL->getSecurePath(), 
            'original_filename' =>$UploadFileURL->getOriginalFileName(), 
            'asset_folder' => $name_folder,
        ]);

        return response()->json([
            "media" => $media,
            'product' => $product,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        return Product::all();
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
    public function update(UpdateProductRequest $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product, Request $request, $id)
    {
        if(!$request->user()->can('delete', $request->user())){
            abort(403);
        }
        // cloudinary()->destroy();
        

        Product::destroy($id);
        
        return response("Success destroy", 200);
    }
}
