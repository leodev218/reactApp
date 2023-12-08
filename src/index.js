import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import "./index.css";
import App from "./App";
import Button from "./components/Navbar";
import Logo from "./components/Logo";
import MainLogo from "./components/Logo";
import Gif from "./components/Gif";
import ClientCard from "./components/ClientCard";
import { Posts } from "./posts/postTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>

    <Logo />
    <Gif />
    <Posts />
    <ClientCard />
    <App/>
    <MainLogo />
    <Button  />
  </StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
