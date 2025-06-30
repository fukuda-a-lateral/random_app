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
                "resources/css/app.css",
                "resources/js/app.js",
                "resources/ts/index.tsx",
            ],
            refresh: true,
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            // @styles というエイリアス名で resources/scss/styles ディレクトリを指すように設定
            "@styles": path.resolve(__dirname, "resources/scss/styles"),
            // もし必要なら、@components なども追加できる
            "@components": path.resolve(__dirname, "resources/ts/components"),
        },
    },
});
