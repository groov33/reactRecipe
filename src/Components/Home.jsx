import React from "react";
import Ingredients from "./Ingredients";
import Selected from "./Selected";
import Next from "./Next";

function Home({ items, handleDelete, handleSelect }) {
  return (
    <div className="select-none">
      <div
        id="header"
        className="text-3xl font-bold bg-purple-200 text-center p-4 mb-6"
      >
        React Recipe
      </div>{" "}
      <div
        id="description"
        className="text-md bg-green-200 text-center p-2 mb-8 border border-green-500"
      >
        Select or unselect ingredients by clicking on them and check recipies.
      </div>
      <div className="flex justify-center gap-4 h-full">
        <div className="w-[35%] h-full flex flex-col justify-center items-center">
          <Ingredients
            items={items}
            handleDelete={handleDelete}
            handleSelect={handleSelect}
          />
        </div>
        <div className="w-[35%] h-full flex flex-col justify-center items-center">
          <Selected
            items={items}
            handleDelete={handleDelete}
            handleSelect={handleSelect}
          />
        </div>
        <div className="w-[30%] flex justify-center items-center">
          <Next />
        </div>
      </div>
    </div>
  );
}

export default Home;
