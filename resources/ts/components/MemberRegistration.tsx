import {
    Box,
    Button,
    PasswordInput,
    TextInput,
    Container,
    Title,
} from "@mantine/core";
import { useState } from "react";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function MemberRegistration() {
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
            const res = await axios.post("api/member-register", params);
            setPost(res.data);
            console.log("post成功！", post);
            navigate("/");
        } catch (error) {
            console.log("api接続に失敗しました", error);
        }
    };
    return (
        <Container w={"50%"} ta={"center"} p={"2rem"}>
            <Title order={2}>会員登録</Title>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Box p={"xs"} ta={"left"}>
                    <TextInput
                        size="md"
                        mb={"3%"}
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        {...form.getInputProps("name")}
                        label="■お名前"
                        placeholder="アプリ上の表示ネームだよ"
                    />
                    <TextInput
                        size="md"
                        mb={"3%"}
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        {...form.getInputProps("email")}
                        label="■メールアドレス"
                        placeholder="ログインID or メールアドレス"
                    />
                    <PasswordInput
                        size="md"
                        mb={"3%"}
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        {...form.getInputProps("password")}
                        label="■パスワード"
                        placeholder=""
                    />
                    <PasswordInput
                        size="md"
                        mb={"3%"}
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        {...form.getInputProps("password_confirmation")}
                        label="■確認パスワード"
                        placeholder=""
                    />
                </Box>
                <Button
                    size="md"
                    className="middle"
                    type="submit"
                    // onClick={handleSubmit} ←form自体にonSubmitがあるから不要
                >
                    登録
                </Button>
            </form>
        </Container>
    );
}
