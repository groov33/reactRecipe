import React from "react";

function Card({ item, color, handleDelete, handleSelect }) {
  const { name, isSelected, sno } = item;

  return (
    <button
      key={sno}
      onClick={isSelected ? () => handleDelete(sno) : () => handleSelect(sno)}
      className={`m-1 py-2 ${color} rounded-md flex items-center justify-around w-32`}
    >
      {name}
    </button>
  );
}

export default Card;
