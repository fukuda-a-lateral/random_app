import { Box, Button, PasswordInput, TextInput } from "@mantine/core";
import { useState } from "react";
import { useForm } from "@mantine/form";

export function Login() {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            email: "",
            pass: false,
        },
        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "その入力じゃだめ！",
        },
    });

    //これらのステート管理がMantineのuseFormを使うことで不要になる
    // const [login_id, LoginId] = useState("");
    // const [login_pass, LoginPass] = useState("");
    const handleSubmit = (values: typeof form.values) => {
        console.log("入力値はuseFormがいい感じにセットしてくれる", values);
        // ここで認証のapiを呼び出す
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
                        {...form.getInputProps("pass")}
                        label="パスワード"
                        placeholder="ダルだるちっちくん"
                    />
                </Box>
                <Button
                    color="grape"
                    size="lg"
                    className="text-red"
                    type="submit"
                    onClick={Login}
                >
                    ログインボタン
                </Button>
            </form>
        </div>
    );
}
