import React from "react";
import Card from "./Card";
import testInfo from "../test.json";

const Cards = () => {
  
  return (
   <>
    <div className="container h-100 w-100 d-flex justify-content-center">
      <div className="row">
        {testInfo.map((item) => (
          <div className="col-12 col-md-6 col-sm-12 col-lg-4" key={item.item.id}>
            <Card title={item.item.nombre} doc={item.item.doc}/>
          </div>
        ))}
      </div>
    </div>
   </>
  );
};
export default Cards;
