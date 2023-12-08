import { useState } from "react";
import React from "react";
import data from "./../test.json";

function Button() {
  return (
    <>
      {data.map(info => (
        <div className="container m-3" key={info.item.id}>
          <button className="btn btn-dark" id={info.item.id}>
            Test
          </button>
        </div>
      ))}
    </>
  );
}
export default Button;

/*

 const [counter, setCounter] = useState(0);
  const handleAdd = () => {
    setCounter(counter + 1);
  };
*/
