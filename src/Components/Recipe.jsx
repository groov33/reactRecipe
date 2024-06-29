import React from "react";

function Recipe({ recipe, index }) {
  const { name, ingreds, procedure, toShow } = recipe;

  return (
    <div key={index} className="mb-4">
      <h3 className="text-lg font-medium p-2 px-3 text-white bg-zinc-700">
        {name}
      </h3>
      <div className="p-2 px-5 bg-zinc-200">
        <h5 className="font-normal text-md">
          Ingredients Needed: {ingreds.join(", ")}
        </h5>
        <p className="whitespace-pre-wrap font-light">{procedure}</p>
      </div>
    </div>
  );
}

export default Recipe;
