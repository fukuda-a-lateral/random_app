import { Button, Grid, Text, Container, Center } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Genre = {
    id: number;
    category_id: number;
    name: string;
};

export function Genres() {
    //ページ遷移時にHomeから渡されるcategory_idをkeyに表示するジャンルを取得する
    // {id:1}みたいな形で取得できる
    const navigate = useNavigate();
    const params = useParams();
    const [genres, setGenres] = useState<Genre[]>([]);
    useEffect(() => {
        console.log("category_id撮れてるかな？", params);
        const getGenres = async () => {
            try {
                const res = await axios.get(
                    `/api/genres/${params.category_id}`
                );
                setGenres(res.data);
                console.log("ジャンルの取得に成功！", res.data);
            } catch (error) {
                console.error("ジャンル取得できませんでした", error);
            }
        };
        getGenres();
    }, []);

    const handleClick = (genre_id: number) => {
        navigate(`/card/${genre_id}`);
    };

    return (
        <>
            <Center maw={1800} p={50}>
                <Grid>
                    {genres.map((item) => {
                        return (
                            <Grid.Col key={item.id} span={3}>
                                <Button
                                    h={120}
                                    w={200}
                                    m={30}
                                    className="large"
                                    onClick={() => handleClick(item.id)}
                                >
                                    <Text fz={30}>{item.name}</Text>
                                </Button>
                                {/* {item.name} */}
                            </Grid.Col>
                        );
                    })}
                </Grid>
            </Center>
        </>
    );
}
