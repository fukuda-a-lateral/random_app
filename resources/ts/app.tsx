import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
// import { getCsrfCookie } from "./lib/api";
import { BrowserRouter, Route, Routes } from "react-router";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { LoginForm } from "./components/LoginForm";
import Example from "./components/Example";
import axios from "axios";
import { RegisterForm } from "./components/RegisterForm";
import { AuthProvider } from "../contexts/AuthContext";

const MainApp = () => {
    useEffect(() => {
        //リクエストヘッダにX-XRSF-tokenとして付与するXSRF-tokenを取得する
        const getCsrfCookie = async () => {
            try {
                axios.get("/sanctum/csrf-cookie").then((response) => {
                    // Login...
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
                            path="/register"
                            element={<RegisterForm />}
                        ></Route>
                        <Route path="/test" element={<Example />}></Route>
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
