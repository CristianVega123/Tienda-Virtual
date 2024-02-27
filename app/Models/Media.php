<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Media extends Model
{
    use HasFactory;
    
    protected $table = 'media';

    protected $fillable = [
        'public_id',
        'resource_type',
        'url_img',
        'url_img_secure',
        'original_filename',
        'asset_folder',
        'prod_id'
    ];

    protected $primaryKey= 'media_id';
    public $timestamps = false;

    public function products(): HasOne
    {
        return $this->hasOne(Product::class, 'prod_id');
    } 
}
