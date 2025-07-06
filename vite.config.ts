import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                // "resources/scss/app.scss",
                // "resources/ts/app.ts",
                "resources/ts/app.tsx",
            ],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        // ★これが重要★
        host: true, // Docker環境では必須
        hmr: {
            host: "localhost", // または 'random-app.test'など、アクセスするホスト名
            clientPort: 5173, // Viteのポート
        },
        // proxy: {
        //     // '/api': { // もしAPIルートをプロキシしたい場合
        //     //     target: 'http://localhost:8000',
        //     //     changeOrigin: true,
        //     //     rewrite: (path) => path.replace(/^\/api/, '')
        //     // },
        //     // '/' がLaravelアプリケーションにプロキシされるように設定
        //     '/': {
        //         target: 'http://laravel.test', // LaravelアプリケーションのURL
        //         changeOrigin: true, // オリジンを変更 (CORS回避のため)
        //         // rewrite: (path) => path // パスを書き換えない
        //     }
        // },
        watch: {
            usePolling: true, // Docker環境でのファイル変更検知用
        },
    },
    resolve: {
        alias: {
            // @styles というエイリアス名で resources/scss/styles ディレクトリを指すように設定
            "@styles": path.resolve(__dirname, "resources/scss/styles"),
            // もし必要なら、@components なども追加できる
            "@components": path.resolve(__dirname, "resources/ts/components"),
        },
    },
});
