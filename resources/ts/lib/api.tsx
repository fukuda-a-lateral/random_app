import axios from "axios";

export const getCsrfCookie = async () => {
    try {
        // LaravelのSanctumが提供するCSRFトークン取得エンドポイント
        await axios.get("/sanctum/csrf-cookie");
        console.log("CSRF cookie obtained successfully!");
    } catch (error) {
        console.error("Failed to get CSRF cookie:", error);
        throw error; // エラーを呼び出し元に伝える
    }
};
