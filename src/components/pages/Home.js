import React from "react";
import Gif from "../Gif";
import Post from "./Post";
import "../../index.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid home">
        <h1 className="col align-text-center fontPrimary">Bienvenido, este es un sitio en desarrollo</h1>
        <h2 className="col align-text-center fontSecondary">Muy pronto estaremos en funcionamiento</h2>
        <Gif />
       <Post/>
      </div>
    </>
  );
};
export default Home;
