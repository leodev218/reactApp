import React from "react";
import logo from "../assets/img/kairos.png";
import { CardImg } from "reactstrap";
const Card = () => {
  return (
    <>
      <div className="card rounded-0">
        <div className="card-body text-dark">
          <CardImg alt="Card image cap" src={logo} top width="100%" />
          <h1 className="card-title">Title Card</h1>
          <h4 className="card-text">
            llksjadlakjdslaksdjalksdjalksdjalskdjalskd la alkdjsla l akjdla l
            alsdasda ad ad a d sdasdadadasd ad asdasd as da sdasda d
            adasdasddacdasdsdad asd asd asd a d asd asdasdasdasdasd ad sdasd s
          </h4>
        </div>
      </div>
    </>
  );
};
export default Card;
