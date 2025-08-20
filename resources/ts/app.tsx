import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
// import { getCsrfCookie } from "./lib/api";
import { BrowserRouter, Route, Routes } from "react-router";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { LoginForm } from "./components/LoginForm";
import Example from "./components/Example";
import axios from "axios";
import { MemberRegistration } from "./components/MemberRegistration";

import { AuthProvider } from "../contexts/AuthContext";
import { Home } from "./components/Home";
import { Genres } from "./components/Genres";
import { Card } from "./components/Card";

import { ProtectedRoutes } from "./lib/ProtectedRoutes";
import { RegisterCard } from "./components/RegisterCard";

const MainApp = () => {
    useEffect(() => {
        //リクエストヘッダにX-XRSF-tokenとして付与するXSRF-tokenを取得する
        const getCsrfCookie = async () => {
            try {
                axios.get("/sanctum/csrf-cookie").then((response) => {
                    console.log("トークン取得できました！");
                });
            } catch (error) {
                console.log("トークン取得できず", error);
            }
        };
        getCsrfCookie();
    }, []);

    return (
        <MantineProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginForm />}></Route>
                        <Route
                            path="member-register"
                            element={<MemberRegistration />}
                        ></Route>
                        {/* PrivateRoutes内に設定された画面はログインが必須 */}
                        {/* <Route element={<ProtectedRoutes />}> */}
                        <Route path="/home" element={<Home />}></Route>
                        <Route
                            path="/genres/:category_id"
                            element={<Genres />}
                        ></Route>
                        <Route
                            path="/card/:genre_id"
                            element={<Card />}
                        ></Route>
                        <Route
                            path="/register-card"
                            element={<RegisterCard />}
                        ></Route>
                        {/* </Route> */}
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </MantineProvider>
    );
};

//id=appの要素を取得してReactアプリをレンダリング
const root = createRoot(document.getElementById("app")!);

//MainAppを必ず通るエントリルートとして読み込む
root.render(
    <React.StrictMode>
        <MainApp />
    </React.StrictMode>
);
