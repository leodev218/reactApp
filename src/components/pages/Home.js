import React from "react";
import Login from "../ui/Login";
import Gif from "../ui/Gif"
import "../../index.css";

const Home = () => {
  return (
    <>
      <section className="home">
        <Gif />
        <Login />
      </section>
    </>
  );
};
export default Home;

/**    <h1 className="fontPrimary">
          Bienvenido, este es un sitio en desarrollo
        </h1>
        <h2 className="fontSecondary">
          Muy pronto estaremos en funcionamiento
        </h2> */
