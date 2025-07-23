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
        //     // ⭐︎ 各プロキシ設定に onProxyRes または logger を追加 ⭐︎
        //     "/api": {
        //         target: "http://localhost:8000",
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, "/api"),
        //         // onProxyReq: (proxyReq, req, res) => {
        //         //     console.log('Proxying /api request:', req.url);
        //         // },
        //         // onProxyRes: (proxyRes, req, res) => {
        //         //     console.log('Received response from /api:', proxyRes.statusCode);
        //         // },
        //         configure: (proxy, options) => {
        //             // こちらが簡単
        //             proxy.on("proxyReq", (proxyReq, req, res) => {
        //                 console.log(
        //                     `[Vite Proxy] Proxying: ${req.method} ${req.url} -> ${options.target}${req.url}`
        //                 );
        //             });
        //             proxy.on("proxyRes", (proxyRes, req, res) => {
        //                 console.log(
        //                     `[Vite Proxy] Response for ${req.url}: ${proxyRes.statusCode}`
        //                 );
        //             });
        //             proxy.on("error", (err, req, res) => {
        //                 console.error(
        //                     `[Vite Proxy Error] ${req.url}: ${err.message}`
        //                 );
        //             });
        //         },
        //     },
        //     // ⭐︎ もし /login や /register などが /api プレフィックスなしで呼ばれている場合もプロキシする ⭐︎
        //     "/login": {
        //         target: "http://localhost:8000",
        //         changeOrigin: true,
        //         configure: (proxy, options) => {
        //             proxy.on("proxyReq", (proxyReq, req, res) => {
        //                 console.log(
        //                     `[Vite Proxy] Proxying: ${req.method} ${req.url} -> ${options.target}${req.url}`
        //                 );
        //             });
        //             proxy.on("proxyRes", (proxyRes, req, res) => {
        //                 console.log(
        //                     `[Vite Proxy] Response for ${req.url}: ${proxyRes.statusCode}`
        //                 );
        //             });
        //             proxy.on("error", (err, req, res) => {
        //                 console.error(
        //                     `[Vite Proxy Error] ${req.url}: ${err.message}`
        //                 );
        //             });
        //         },
        //     },
        //     "/logout": {
        //         target: "http://localhost:8000",
        //         changeOrigin: true,
        //     },
        //     "/register": {
        //         target: "http://localhost:8000",
        //         changeOrigin: true,
        //     },
        //     "/sanctum/csrf-cookie": {
        //         // CSRFクッキー取得もプロキシ
        //         target: "http://localhost:8000",
        //         changeOrigin: true,
        //     },
        //     "/user": {
        //         // もし /api/user ではなく /user で叩いているならこれも必要
        //         target: "http://localhost:8000",
        //         changeOrigin: true,
        //     },
        // },

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
