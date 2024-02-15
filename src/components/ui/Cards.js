import React from "react";
import Card from "./Card";
import testInfo from "../../test.json";

const Cards = () => {
  return (
    <>
      <div className="row">
        {testInfo.map((item) => (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-4"
            key={item.item.id}
          >
            <Card
              title={item.item.nombre}
              doc={item.item.doc}
              text={item.item.text}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Cards;
