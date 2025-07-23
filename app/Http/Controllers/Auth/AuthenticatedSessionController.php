<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
public function store(LoginRequest $request): Response
{
    try {
        $request->authenticate(); // ⭐︎ この行が実行されるか？

        $request->session()->regenerate();

        Log::info('Login successful for user.', [ /* ... */ ]); // ⭐︎ 認証成功ログ
        return response()->noContent();

    } catch (\Illuminate\Validation\ValidationException $e) {
        Log::warning('Login failed: ValidationException.', [ /* ... */ ]); // ⭐︎ バリデーションエラーログ
        throw $e;
    } catch (\Throwable $e) {
        Log::error('An unexpected error occurred during login.', [ /* ... */ ]); // ⭐︎ その他のエラーログ
        throw $e;
    }
}

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
