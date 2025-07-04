import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Login } from "./components/Login";
import Example from "./components/Example";

const root = createRoot(document.getElementById("app")!);

root.render(
    <React.StrictMode>
        <MantineProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/test" element={<Example />}></Route>
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    </React.StrictMode>
);

// import React from "react";
// import { createRoot } from "react-dom/client";

// // index.blade.phpのid="app"を読み込む
// const container = document.getElementById("app");
// const root = createRoot(container!); // createRoot(container!) if you use TypeScript

// root.render(<div className="text-red">Laravel React+Typescript環境構築</div>);
