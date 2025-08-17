import { Box, Button, Text } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Cards = {
    id: number;
    title: string;
    description: string;
    url: string;
    img: string;
};

export function Card() {
    const params = useParams();
    const [cards, setCards] = useState<Cards>();
    useEffect(() => {
        const getCard = async () => {
            try {
                const res = await axios.get(`/api/card/${params.genre_id}`);
                console.log("カード情報", res);
                setCards(res.data);
            } catch (error) {
                console.log("カード情報の取得に失敗しました", error);
            }
        };
        getCard();
    }, []);
    return (
        <>
            <Button h={120} w={200} m={30}>
                <Text fz={30}>{cards && cards.title}</Text>
            </Button>
        </>
    );
}
