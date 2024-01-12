<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = "products";    

    protected $primaryKey = "prod_id";


    protected $fillable = [
        'prod_name',
        'prod_price',
        'prod_units',
        'prod_description',
        'prod_url_img',
        'category_id'
    ];

    public $timestamps = false;
}