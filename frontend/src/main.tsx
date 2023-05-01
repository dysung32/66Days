import ReactDOM from "react-dom/client";
import React from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import { theme } from "./styles/theme";
import GlobalFont from "./styles/GlobalFont.tsx";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html{
    /* font-size: 62.5%;   // 1rem = 10px */
    font-size: 10px;
    box-sizing: border-box;
    color: white;
    /* overflow-y: hidden; */
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
  body{
    margin: 0;
  } 
  // 스크롤 스타일링 
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
  }

`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFont />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
