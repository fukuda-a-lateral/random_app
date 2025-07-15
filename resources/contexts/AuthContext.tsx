import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
    // user:User|null;
    inLogin: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>; // ログイン処理
    logout: () => Promise<void>; // ログアウト処理
    fetchUser: () => Promise<void>; // ユーザー情報取得処理
};

type User = {
    name: string;
    email: string;
};

//AuthContextというグローバル使用できるデータや関数を入れる箱をcreateContextで作る
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//①認証に関する設計（認証に関するデータやその操作をする関数を用意する）
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);
    //userが存在していればtrue
    const inLogin = !!user;

    //user情報取得
    const fetchUser = async () => {
        try {
            const response = await axios.get("/user");
            setUser(response.data);
        } catch (error) {
            setUser(null);
            console.log("user情報の取得に失敗しました", error);
        }
    };

    //ログイン処理関数
    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            const response = await axios.post("/login", { email, password });
            //ログイン成功したらユーザー情報を再取得
            await fetchUser();
            return true;
        } catch (error) {
            //ログイン失敗したらユーザー情報をnullにする
            setUser(null);
            console.error("ログインに失敗しました", error);
            //エラーを呼び出し元でキャッチできるようにスローする
            throw error;
        }
    };

    //ログアウト処理関数
    const logout = async () => {
        try {
            await axios.post("/logout");
            //ログアウト成功したらユーザー情報をクリア
            setUser(null);
        } catch (error) {
            console.error("ログアウトに失敗しました", error);
            throw error;
        }
    };

    //②設計で用意したデータや関数をContextAPIが用意してくれるProviderに渡す準備（valueオブジェクトにする）
    const value = { user, inLogin, fetchUser, login, logout };
    return (
        //③ContextAPIのルール：作った箱を供給してくれる大元に渡す
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

//カスタムフック
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
