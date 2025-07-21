import { Box, Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { useState } from "react";

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
    const { login } = useAuth();

    const [post, setPost] = useState();

    //これらのステート管理がMantineのuseFormを使うことで不要になる
    // const [login_id, LoginId] = useState("");
    // const [login_pass, LoginPass] = useState("");
    const handleSubmit = async (values: typeof form.values) => {
        console.log("入力値はuseFormがいい感じにセットしてくれる", values);
        //すでにトークンは持ってるので、Loginの処理を書いていく！
        //ログイン処理を任せているuseAuthを呼び出す
        //useFormのおかげでvaluesに入力された内容がオブジェクトで全て入ってるのでそのまま渡す
        try {
            const success = await login(values);

            if (success) {
                console.log("ログイン成功！", success);
            }
            // const params = { email: values.email, password: values.password };
            // const res = await axios.post("/login", params);
            // setPost(res.data);
            // console.log("post成功！", post);
        } catch (error) {
            console.log("api接続に失敗しました", error);
        }
    };
    return (
        <div style={{ padding: 40 }}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
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
                    ログインボタン
                </Button>
            </form>
        </div>
    );
}
