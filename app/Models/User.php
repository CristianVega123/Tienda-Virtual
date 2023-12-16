<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     * @var array<int, string>
     */
    protected $fillable = [
        'user_name',
        'user_surname',
        'user_email',
        'user_password',
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

    protected $cast = [
        'user_valid' => 'boolean',
        'user_password' => 'hashed'
    ];


    /**
     * Hide the specific properties that are stored into array when returned a json 
     */

     protected $hidden = [
        'user_password',
     ];

    /**
     * Timestamp
     * @var bool
     */
    public $timestamps = false;


}
