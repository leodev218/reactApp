import React from "react";
import logo from "../assets/img/kairos.png";
import { CardImg } from "reactstrap";

const Card = (props) => {
  
  console.log(props)
  return (
    <>
      <div className="card rounded-0 m-2 bg-dark bg-opacity-10">
        <div className="card-body text-dark">
          <CardImg alt="Card image cap" src={logo} top width="100%" />
          <h1 className="card-title fs-4">{props.title}</h1>
          <p className="card-text">
            llksjadlakjdslaksdjalksdjalksdjalskdjalskd la alkdjsla l akjdla l
            alsdasda ad ad a d sdasdadadasd ad asdasd as da sdasda d
            adasdasddacdasdsdad asd asd asd a d asd asdasdasdasdasd ad sdasd s
          </p>
          <h4>{props.doc}</h4>
        </div>
      </div>
    </>
  );
};
export default Card;
