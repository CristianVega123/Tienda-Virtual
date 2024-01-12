<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Cloudinary\Configuration\Configuration;
use Illuminate\Contracts\Foundation\Application;

class CloudinaryStorageProvider extends ServiceProvider
{
          
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(Configuration::class, function(Application $app) {
            return Configuration::instance([
                'cloud' => [
                    'cloud_name' => env("CLOUDINARY_NAME"),
                    'api_key' => env("CLOUDINARY_API_KEY"),
                    'api_secret' => env("CLOUDINARY_API_SECRET"),
                ],
                'url' => [
                    'secure' => true
                ]
            ]);
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
