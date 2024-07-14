import React from "react";

function Square({ value, handleClick }) {
  return (
    <button className={"square"} onClick={handleClick} value={value}>
      {value}
    </button>
  );
}

export default Square;
