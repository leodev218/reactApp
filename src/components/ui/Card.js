import React from "react";
import logo from "../../assets/img/kairos.png";
import { CardImg } from "reactstrap";

const Card = (props) => {
  
  console.log(props)
  return (
    <>
      <div className="card rounded-0 ms-2 m-1">
        <div className="card-body text-dark">
          <CardImg alt="Card image cap" src={logo} className="imgCard"/>
          <h1 className="card-title fs-4">{props.title}</h1>
          <p className="card-text">{props.text}</p>
          <h4>{props.doc}</h4>
        </div>
      </div>
    </>
  );
};
export default Card;
