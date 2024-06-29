import React from "react";
import Card from "./Card";

function Ingredients({ items, handleDelete, handleSelect }) {
  return (
    <>
      <header className="mb-6 bg-slate-400 text-white rounded px-10 py-2 text-xl">
        Ingredients
      </header>
      {items
        .filter((item) => !item.isSelected)
        .map((item) => (
          <Card
            item={item}
            color="bg-[#9bf6ff]"
            handleDelete={handleDelete}
            handleSelect={handleSelect}
          />
        ))}
    </>
  );
}

export default Ingredients;
