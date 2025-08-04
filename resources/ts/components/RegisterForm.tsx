import { Box, Button, PasswordInput, TextInput } from "@mantine/core";
import { useState } from "react";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
    const navigate = useNavigate();
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "その入力じゃだめ！",
        },
    });

    const [post, setPost] = useState();
    const handleSubmit = async (values: typeof form.values) => {
        try {
            const params = {
                name: values.name,
                email: values.email,
                password: values.password,
                password_confirmation: values.password_confirmation,
            };
            const res = await axios.post("api/register", params);
            setPost(res.data);

            console.log("post成功！", post);
            navigate("/");
        } catch (error) {
            console.log("api接続に失敗しました", error);
        }
    };
    return (
        <div style={{ padding: 40 }}>
            <h1>会員登録</h1>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Box p={"xs"}>
                    <TextInput
                        {...form.getInputProps("name")}
                        label="お名前"
                        placeholder="アプリ上の表示ネームだよ"
                    />
                    <TextInput
                        {...form.getInputProps("email")}
                        label="メールアドレス"
                        placeholder="ログインID or メールアドレス"
                    />
                    <PasswordInput
                        {...form.getInputProps("password")}
                        label="パスワード"
                        placeholder=""
                    />
                    <PasswordInput
                        {...form.getInputProps("password_confirmation")}
                        label="確認パスワード"
                        placeholder=""
                    />
                </Box>
                <Button
                    color="green"
                    size="lg"
                    className="text-red"
                    type="submit"
                    // onClick={handleSubmit} ←form自体にonSubmitがあるから不要
                >
                    登録
                </Button>
            </form>
        </div>
    );
}
