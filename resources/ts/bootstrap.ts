import axios from "axios";
window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

// SanctumがCookieベースの認証を使うために必要。
// Laravelが生成するXSRF-TOKENクッキーを読み取り、X-XSRF-TOKENヘッダーとして自動的に送信してくれる。
window.axios.defaults.withCredentials = true; // ★これが重要★
window.axios.defaults.withXSRFToken = true; // ★これも重要（Axios 1.x以降）★

// APIのベースURLを設定（開発環境なら通常これ）
// window.axios.defaults.baseURL = 'http://localhost:8000/api';
window.axios.defaults.baseURL = import.meta.env.VITE_APP_URL + "/api";
