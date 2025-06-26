@section('base')
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title','study-app')</title>

    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/ts/app.tsx'])
</head>

<body>
    <div id="app">
        @yield('contents')
    </div>
</body>

</html>
<div>aaaaaaaa</div>
@endsection
