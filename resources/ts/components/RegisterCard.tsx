import {
    Box,
    Button,
    Center,
    FileInput,
    MultiSelect,
    Select,
    Textarea,
    TextInput,
    Container,
    Space,
    Title,
    Text,
} from "@mantine/core";
import { TimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Category = {
    id: number;
    name: string;
};

type Genre = {
    id: number;
    name: string;
};

export function RegisterCard() {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            title: "",
            category: "",
            genres: [],
            description: "",
            url: "",
            img: "",
            location: "",
            start: "",
            end: "",
            close: [],
            level: "",
        },
        // 今のフォーム全体の値(now_form_value)を引数に受け取る
        // セレクトの値が変更されると、now_form_valueとして変更後の値が渡ってくる
        // でも再レンダリングされてないので、useFormが持つstate(form.valueとか)は変更前の状態
        onValuesChange: (now_form_value) => {
            // カテゴリーの値が変わったら
            if (now_form_value.category !== form.values.category) {
                handleCategoryChange(now_form_value.category);
            }
        },
    });

    const [category, setCategory] = useState<Category[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [message, setMessage] = useState("");
    const space_size = "1rem";
    const navigate = useNavigate();

    useEffect(() => {
        // セレクトにセットするカテゴリーを取得する
        const getCategory = async () => {
            try {
                const res = await axios.get("api/categories");
                console.log("採れたてカテゴリー", res.data);
                setCategory(res.data);
            } catch (error) {
                console.log("カテゴリー取得に失敗しました", error);
            }
        };
        getCategory();
    }, []);

    // カテゴリーがセットされたらcategory_idに紐づくgenreを取得する
    const handleCategoryChange = async (category_id: string) => {
        try {
            const res = await axios.get(`api/genres/${category_id}`);
            if (res) {
                setGenres(res.data);
                console.log("採れたてジャンル", res.data);
            }
        } catch (error) {
            console.log("ジャンルが取得できませんでした", error);
        }
    };

    const handleSubmit = async (values: typeof form.values) => {
        try {
            const res = await axios.post(
                "/api/card/register",
                form.getValues()
            );
            setMessage(res.data);
            console.log("メッセージ", message);
        } catch (error) {
            console.log("カードの登録に失敗", error);
            setMessage("登録できませんでした");
        }
    };

    const handleReturnClick = () => {
        navigate("/home");
    };
    const handleRegisterClick = () => {};
    return (
        <Container w={"50%"} ta={"center"} p={"2rem"}>
            <Title order={2}>カード登録</Title>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Box w={"100%"} p={30} ta={"left"}>
                    <TextInput
                        size="sm"
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        label="タイトル"
                        {...form.getInputProps("title")}
                    />
                    <Space h={space_size} />
                    <Select
                        size="sm"
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        label="カテゴリー"
                        placeholder="ここをクリック！"
                        data={category.map((item) => {
                            return {
                                value: String(item.id),
                                label: item.name,
                            };
                        })}
                        {...form.getInputProps("category")}
                    />
                    <Space h={space_size} />

                    <MultiSelect
                        size="sm"
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        label="ジャンル"
                        placeholder="複数選べるよ"
                        // data={["和食", "洋風", "アジアン", "スイーツ"]}
                        data={genres.map((item) => {
                            return { value: String(item.id), label: item.name };
                        })}
                        {...form.getInputProps("genres")}
                    />
                    <Space h={space_size} />
                    <Textarea
                        size="sm"
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        label="説明"
                        // description="Input description"
                        // placeholder="Input placeholder"
                        {...form.getInputProps("description")}
                    />
                    <Space h={space_size} />
                    <TextInput
                        size="sm"
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        label="関連サイト"
                        // description="Input description"
                        // placeholder="Input placeholder"
                        {...form.getInputProps("url")}
                    />
                    <Space h={space_size} />
                    <FileInput
                        size="sm"
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        label="画像"
                        // description="Input description"
                        placeholder="ここをクリックして画像を選択"
                        {...form.getInputProps("img")}
                    />
                    <Space h={space_size} />
                    <TextInput
                        size="sm"
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        label="所在地"
                        // description="Input description"
                        // placeholder="Input placeholder"
                        {...form.getInputProps("location")}
                    />
                    <Space h={space_size} />
                    <TimePicker
                        size="sm"
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        label="OPEN"
                        withDropdown
                        {...form.getInputProps("start")}
                    />
                    <Space h={space_size} />
                    <TimePicker
                        size="sm"
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        label="CLOSE"
                        withDropdown
                        {...form.getInputProps("end")}
                    />
                    <Space h={space_size} />
                    <MultiSelect
                        size="sm"
                        classNames={{
                            label: "my-label",
                            input: "my-input",
                        }}
                        label="定休日"
                        placeholder="複数選べるよ"
                        data={[
                            "土曜日",
                            "日曜日",
                            "月曜日",
                            "火曜日",
                            "水曜日",
                            "木曜日",
                            "金曜日",
                            "祝日",
                            "祝前",
                            "なし",
                        ]}
                        {...form.getInputProps("close")}
                    />
                </Box>
                <Space h={space_size} />
                <Button
                    className="middle"
                    mr="10px"
                    onClick={handleReturnClick}
                >
                    戻る
                </Button>
                <Button type="submit" className="middle" ml="10px">
                    登録
                </Button>
            </form>
            <Text c={"red"}>{message}</Text>
        </Container>
    );
}
