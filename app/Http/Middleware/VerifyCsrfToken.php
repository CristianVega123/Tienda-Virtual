<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        //Se soluciona un error, esta es la solución mas facil que he encontrado, pero no es la mejor ya que supuestamente este error (codigo 419) no debería aparecer aún cuando estoy mandando el token CSRF
        // "api/logout"
    ];
}
