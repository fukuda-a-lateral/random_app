import { Box } from "@mantine/core";
import "@styles/_base_card.scss";
import { CardInfo } from "../type/CardInfo";

// propsオブジェクトのcard_infoというキーをcard_infoという変数に分割代入している
// propsのcard_infoというキーの型はCardInfoという定義
export function BaseCard({ card_info }: { card_info: CardInfo }) {
    // 作成時間を整形したい
    const date = new Date(card_info.created_at);
    const formatterYYYYMMDD = new Intl.DateTimeFormat("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    //isNaN(value)で値が非数かどうかチェック
    // DateオブジェクトのgetTimeは有効日付文字列を渡すと必ず数字が返ってくる
    const formatted_date = Number.isNaN(date.getTime())
        ? "不明"
        : formatterYYYYMMDD.format(date);
    return (
        <>
            <Box className="blog-card spring-fever container">
                <Box className="title-content">
                    <h3>{card_info.title}</h3>
                    <hr />
                    <Box className="intro">{card_info.description}</Box>
                </Box>
                {/* <!-- /.title-content --> */}
                <Box className="card-info">
                    <Box>URL : {card_info.url}</Box>
                    <Box>場所 : {card_info.location}</Box>
                    <Box>
                        営業時間 : {card_info.start} ~ {card_info.end}
                    </Box>
                    <Box>定休日 :{card_info.close}</Box>
                </Box>
                {/* <!-- /.card-info --> */}
                <Box className="utility-info">
                    <ul className="utility-list">
                        <li
                            className="comment
                        s"
                        >
                            12
                        </li>
                        <li className="date">{formatted_date}</li>
                    </ul>
                </Box>
                {/* <!-- /.utility-info --> */}
                {/* <!-- overlays --> */}
                <Box className="gradient-overlay"></Box>
                <Box className="color-overlay"></Box>
            </Box>
            {/* <!-- /.blog-card --> */}
        </>
    );
}
