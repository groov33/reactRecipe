import React, { useState } from "react";
import Home from "./Components/Home";
import RecipePage from "./Components/RecipePage";
import { Route, Routes } from "react-router-dom";

function App() {
  const data = [
    { name: "Spinach", isSelected: false, sno: 7 },
    { name: "Potato", isSelected: false, sno: 1 },
    { name: "Garlic", isSelected: false, sno: 4 },
    { name: "Cumin Seeds", isSelected: false, sno: 9 },
    { name: "Onion", isSelected: false, sno: 3 },
    { name: "Tomato", isSelected: false, sno: 2 },
    { name: "Turmeric", isSelected: false, sno: 10 },
    { name: "Green Peas", isSelected: false, sno: 6 },
    { name: "Ginger", isSelected: false, sno: 5 },
    { name: "Paneer", isSelected: false, sno: 8 },
  ];

  const [items, setItems] = useState(data);

  const handleDelete = (id) => {
    console.log(id);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.sno === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const handleSelect = (id) => {
    console.log(id);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.sno === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              handleDelete={handleDelete}
              handleSelect={handleSelect}
            />
          }
        />
        <Route path="/recipies" element={<RecipePage items={items} />} />
      </Routes>
    </>
  );
}

export default App;
