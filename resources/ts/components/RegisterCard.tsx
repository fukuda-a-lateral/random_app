import {
    Box,
    Button,
    Center,
    FileInput,
    MultiSelect,
    Select,
    Textarea,
    TextInput,
} from "@mantine/core";
import { TimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useEffect, useState } from "react";

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
            genre: [],
            description: "",
            url: "",
            img: "",
            location: "",
            start: "",
            end: "",
            close: "",
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

    const handleSubmit = () => {
        console.log("ボタンが押されたよ");
    };
    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Center>
                <Box w={500} p={30}>
                    <TextInput
                        label="タイトル"
                        {...form.getInputProps("title")}
                        // description="Input description"
                        // placeholder="Input placeholder"
                    />

                    <Select
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
                    <MultiSelect
                        label="ジャンル"
                        placeholder="複数選べるよ"
                        // data={["和食", "洋風", "アジアン", "スイーツ"]}
                        data={genres.map((item) => {
                            return { value: String(item.id), label: item.name };
                        })}
                        {...form.getInputProps("genre")}
                    />
                    <Textarea
                        label="説明"
                        // description="Input description"
                        // placeholder="Input placeholder"
                        {...form.getInputProps("description")}
                    />
                    <TextInput
                        label="関連サイト"
                        // description="Input description"
                        // placeholder="Input placeholder"
                        {...form.getInputProps("url")}
                    />
                    <FileInput
                        label="画像"
                        // description="Input description"
                        placeholder="ここをクリックして画像を選択"
                        {...form.getInputProps("img")}
                    />
                    <TextInput
                        label="所在地"
                        // description="Input description"
                        // placeholder="Input placeholder"
                        {...form.getInputProps("location")}
                    />
                    <TimePicker
                        label="OPEN"
                        withDropdown
                        {...form.getInputProps("start")}
                    />
                    <TimePicker
                        label="CLOSE"
                        withDropdown
                        {...form.getInputProps("end")}
                    />
                    <MultiSelect
                        label="営業日"
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
                        ]}
                        {...form.getInputProps("close")}
                    />
                    <Button type="submit">登録</Button>
                </Box>
            </Center>
        </form>
    );
}
