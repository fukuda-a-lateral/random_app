import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export function ProtectedRoutes() {
    const { inLogin } = useAuth();
    //ログインチェック
    if (!inLogin) {
        // return <Navigate to="/" state={{ redirectPath: location.pathname }} />;
        //replaceを使うと履歴が残らないので戻るボタンで保護ページに戻れないようにする
        //stateに遷移前のパスを渡してログイン後に戻ってこれるようにする
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    //ログイン状態であれば指定したルートに該当する子コンポーネントを返す
    return <Outlet />;
}
