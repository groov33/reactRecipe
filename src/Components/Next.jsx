import React from "react";
import { useNavigate } from "react-router-dom";

function Next() {
  const navigate = useNavigate();

  const handleNext = () => {
    console.log("clicked next");
    navigate("/recipies");
  };

  return (
    <div>
      <button
        onClick={handleNext}
        className="bg-teal-900 text-white rounded-xl px-16 py-2"
      >
        Check recipes
      </button>
    </div>
  );
}

export default Next;
