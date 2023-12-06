<?php 

namespace App\Repository;

use App\Models\User;

class UserRepository {
    
    protected $userModel;

    public function __construct(User $user)
    {
       $this->userModel = $user; 
    }
    
}