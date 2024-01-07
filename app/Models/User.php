<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable 
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     * @var array<int, string>
     */
    protected $fillable = [
        'user_name',
        'user_surname',
        'email',
        'password',
        'user_valid',
        'user_role'
    ];

    /**
     * Primary key
     *  @var string
     */
    protected $primaryKey = "user_id";


    /**
     * Cast
     * @var array
     */

    protected $casts = [
        'user_valid' => 'boolean',
        'password' => 'hashed'
    ];


    /**
     * Hide the specific properties that are stored into array when returned a json 
     */

     protected $hidden = [
        'password',
     ];

    /**
     * Timestamp
     * @var bool
     */
    public $timestamps = false;


}
