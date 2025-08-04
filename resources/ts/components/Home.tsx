import { h } from "vue";
import {
    Button,
    Container,
    Grid,
    SimpleGrid,
    Skeleton,
    Box,
    Text,
    useMantineTheme,
    BackgroundImage,
    Center,
    Flex,
    Image,
} from "@mantine/core";

const PRIMARY_COL_HEIGHT = "500px";

export function Home() {
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 5 - var(--mantine-spacing-md) / 2)`;
    const theme = useMantineTheme();

    //ジャンルボタンを表示するための情報を取得する

    //ボタン押下時
    const handleClick = () => {
        console.log("押したよ！");
        // ボタンはカテゴリーidを持っていて、それをkeyにジャンルを取得
        // DB側なのでapiを呼び出す
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
                        style={{
                            backgroundColor: theme.colors.grape[5],
                            position: "relative",
                        }}
                    >
                        <Image
                            src="/images/forest.jpg"
                            style={{ position: "absolute" }}
                            h={PRIMARY_COL_HEIGHT}
                        ></Image>

                        <Text
                            c={"white"}
                            size="lg"
                            p={50}
                            style={{
                                position: "absolute",
                                top: "50px",
                            }}
                        >
                            登録する？
                        </Text>
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
                            <Button
                                variant="transparent"
                                c={"#716969"}
                                onClick={handleClick}
                            >
                                <Text size="lg">ランチにする？</Text>
                            </Button>
                            <Button variant="transparent" c={"#716969"}>
                                <Text size="lg">登山にする？</Text>
                            </Button>
                            <Button variant="transparent" c={"#716969"}>
                                <Text size="lg">登山にする？</Text>
                            </Button>
                            <Button variant="transparent" c={"#716969"}>
                                <Text size="lg">登山にする？</Text>
                            </Button>
                            <Button variant="transparent" c={"#716969"}>
                                <Text size="lg">登山にする？</Text>
                            </Button>
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Container>
        </>
    );
}
