import React from "react";
import Card from "./Card";

const Cards = () => {
  
  return (
    <div className="container h-100 w-100 d-flex justify-content-center">
      <div className="row">
        <div className="col-12 col-md-6 col-sm-12 col-lg-4">
          <Card />
        </div>
        <div className="col-12 col-md-6 col-sm-12 col-lg-4">
          <Card />
        </div>
        <div className="col-12 col-md-6 col-sm-12 col-lg-4">
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Cards;
