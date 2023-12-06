<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap" rel="stylesheet">
        <title>{{ $title }}</title>
    </head>
    <body>
        <div id="app" class="">
        </div>

        @viteReactRefresh
        @vite('resources/ts/index.tsx')
    </body>
</html>
