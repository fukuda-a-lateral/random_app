import { Box, Button, Text } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseCard } from "./BaseCard";
import { CardInfo } from "../type/CardInfo";
import { card_info_ini } from "../const/CardInfo";

export function Card() {
    const params = useParams();
    const [cards, setCards] = useState<CardInfo>(card_info_ini);
    useEffect(() => {
        const getCard = async () => {
            try {
                const res = await axios.get(
                    `/api/random_card/${params.genre_id}`
                );
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
            <BaseCard card_info={cards} />
        </>
    );
}
