import React from "react";
import Recipies from "./Recipies";

function RecipePage({ items }) {
  return (
    <div>
      <div className="text-3xl font-bold bg-purple-200 text-center p-4 mb-2">
        React Recipe
      </div>
      <div className="text-lg font-normal bg-slate-300 text-center p-2 mb-16">
        Possible Recipies
      </div>
      <Recipies items={items} />
    </div>
  );
}

export default RecipePage;
