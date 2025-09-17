import {
    Button,
    Container,
    SimpleGrid,
    Box,
    Text,
    useMantineTheme,
    Flex,
    Image,
} from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "@styles/_home.scss";

const PRIMARY_COL_HEIGHT = "500px";

type Category = { id: number; name: string; category_id: number };

export function Home() {
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 5 - var(--mantine-spacing-md) / 2)`;
    const theme = useMantineTheme();
    const navigate = useNavigate();

    //ジャンルボタンを表示するための情報を取得する
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        const getCategory = async () => {
            try {
                const res = await axios.get("/api/categories");
                setCategories(res.data);
            } catch (error) {
                console.log("カテゴリーを取得できませんでした。", error);
            }
        };
        getCategory();
    }, []);

    //カテゴリーボタン押下時
    const handleClick = (category_id: number) => {
        console.log("押したよ！");
        //ジャンル画面に遷移、そのカテゴリーに紐づくジャンルを表示したいのでカテゴリーidを渡す
        //appのルーティングを動的に設定する
        navigate(`/genres/${category_id}`);
    };
    // 登録ボタン押下時
    const handleClickRegister = () => {
        navigate("/register-card");
    };
    return (
        <>
            <Container my="md">
                <SimpleGrid
                    cols={{ base: 1, sm: 2 }}
                    spacing="md"
                    h={PRIMARY_COL_HEIGHT}
                    style={
                        {
                            // backgroundColor: theme.colors.grape[1],
                        }
                    }
                >
                    <Box
                        // h={PRIMARY_COL_HEIGHT}
                        className="left-area"
                        style={
                            {
                                // backgroundColor: theme.colors.grape[5],
                                // position: "relative",
                            }
                        }
                    >
                        <Box h={PRIMARY_COL_HEIGHT} className="overlay"></Box>
                        <Button
                            // variant="transparent"
                            onClick={() => handleClickRegister()}
                            className="original-box-shadow"
                            // value={item.category_id}
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "25%",
                            }}
                        >
                            登録する？
                        </Button>
                    </Box>
                    <Box>
                        <Flex
                            h={PRIMARY_COL_HEIGHT}
                            justify="space-around"
                            align="center"
                            direction="column"
                            wrap="wrap"
                        >
                            <Box w={"100%"} style={{ position: "relative" }}>
                                <Box
                                    h={20}
                                    w={"100%"}
                                    style={{
                                        backgroundColor: "#F5CBCB",
                                        position: "absolute",
                                    }}
                                />
                                <Text
                                    size="xl"
                                    c={"#716969"}
                                    style={{
                                        position: "absolute",
                                    }}
                                >
                                    今日、何する？
                                </Text>
                            </Box>

                            {/* 以下、初期取得したカテゴリーをボタンで表示 */}
                            {categories &&
                                categories.map((item) => {
                                    return (
                                        <Button
                                            key={item.name}
                                            variant="transparent"
                                            c={"#716969"}
                                            onClick={() => handleClick(item.id)}
                                            value={item.category_id}
                                        >
                                            <Text size="lg">
                                                {item.name}にする？
                                            </Text>
                                        </Button>
                                    );
                                })}
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Container>
        </>
    );
}
