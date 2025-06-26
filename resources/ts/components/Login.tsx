import { Button, PasswordInput } from "@mantine/core";

export function Login() {
    return (
        <div style={{ padding: 40 }}>
            <h1>ログイン</h1>
            <PasswordInput
                label="Input label"
                description="Input description"
                placeholder="Input placeholder"
            />
            <Button color="grape" size="lg">
                グレープボタン🍇
            </Button>
        </div>
    );
}
