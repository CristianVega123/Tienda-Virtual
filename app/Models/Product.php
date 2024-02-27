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
        'category_id'
    ];

    protected $hidden =  [
        'category_id'
    ];

    public $timestamps = false;

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function medias()
    {
        return $this->belongsTo(Media::class, 'media_id');
    }
}
