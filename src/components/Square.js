import React from "react";
import "./square.css";
import Cross from "./Cross";
import Circle from "./Circle";

function Square({ position, value, takeTurn }) {
  const handleClick = () => {
    if (value === "EMPTY") takeTurn(position);
  };

  return (
    <div className="square" onClick={handleClick}>
      {value === "Cross" && <Cross />}
      {value === "Circle" && <Circle />}
    </div>
  );
}

export default Square;
