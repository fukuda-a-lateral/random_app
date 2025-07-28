import { Box, Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { useState } from "react";
import { Navigate, replace, useLocation, useNavigate } from "react-router-dom";

export function LoginForm() {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            email: "",
            password: "",
        },
        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "その入力じゃだめ！",
        },
    });
    //コンポーネントのトップレベルでフックスを呼び出す
    const { login, inLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    //ログイン後のリダイレクト元を取得
    const from = location.state?.from?.pathname || "/home";

    const handleSubmit = async (values: typeof form.values) => {
        //すでにトークンは持ってるので、Loginの処理を書いていく！
        //ログイン処理を任せているuseAuthを呼び出す
        //useFormのおかげでvaluesに入力された内容がオブジェクトで全て入ってるのでそのまま渡す
        try {
            const success = await login(values);

            if (success) {
                console.log("ログイン成功！", success);
                //ログイン後、元のパスかhomeに遷移
                navigate(from, { replace: true });
            }
        } catch (error) {
            console.log("api接続に失敗しました", error);
        }
    };
    const handleRegister = () => {
        navigate("/register", { replace: false });
    };
    return (
        <div style={{ padding: 40 }}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                {/* <form> */}
                <Box p={"xs"}>
                    <TextInput
                        {...form.getInputProps("email")}
                        label="ログインID"
                        placeholder="ログインID or メールアドレス"
                    />
                    <PasswordInput
                        {...form.getInputProps("password")}
                        label="パスワード"
                        placeholder=""
                    />
                </Box>
                <Button
                    color="grape"
                    size="lg"
                    className="text-red"
                    type="submit"
                    // onClick={handleSubmit} ←form自体にonSubmitがあるから不要
                >
                    ログイン
                </Button>
            </form>
            <Button
                color="blue"
                size="lg"
                className=""
                type="submit"
                onClick={handleRegister}
            >
                会員登録
            </Button>
        </div>
    );
}
