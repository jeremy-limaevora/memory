import React from "react";

function Card({ item, id, handleClick }) {
  return (
    <div className={`card ${item.stat}`} onClick={handleClick}>
      <img src={item.img} alt={`Card ${id}`} />
    </div>
  );
}

export default Card;