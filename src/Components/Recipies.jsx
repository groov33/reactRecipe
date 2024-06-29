import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

function Recipies({ items }) {
  const reciInfo = [
    {
      name: "Aloo Jeera",
      ingreds: ["Potato", "Cumin Seeds", "Turmeric", "Onion", "Garlic"],
      procedure: `
        1. Heat oil in a pan, add cumin seeds.
        2. Add chopped garlic and onions, sauté until golden brown.
        3. Add diced potatoes and turmeric, mix well.
        4. Cook until potatoes are tender.
      `,
      toShow: false,
    },

    {
      name: "Matar Paneer",
      ingreds: [
        "Green Peas",
        "Paneer",
        "Tomato",
        "Garlic",
        "Ginger",
        "Turmeric",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add chopped tomatoes and turmeric, cook until tomatoes are soft.
        4. Add green peas and paneer cubes, cook until done.
      `,
      toShow: false,
    },
    {
      name: "Palak Paneer",
      ingreds: ["Spinach", "Paneer", "Ginger", "Turmeric"],
      procedure: `
        1. Blanch spinach, blend into a paste.
        2. Heat oil, add cumin seeds, chopped onions, garlic, and ginger, sauté until golden.
        3. Add turmeric and spinach paste, cook for 5 minutes.
        4. Add paneer cubes, simmer for 10 minutes.
      `,
      toShow: false,
    },

    {
      name: "Aloo Matar",
      ingreds: ["Potato", "Green Peas", "Tomato", "Turmeric"],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add diced potatoes, chopped tomatoes, turmeric, and green peas.
        4. Cook until potatoes and peas are tender.
      `,
      toShow: false,
    },

    {
      name: "Aloo Palak",
      ingreds: ["Potato", "Spinach"],
      procedure: `
        1. Blanch spinach, blend into a paste.
        2. Heat oil, add cumin seeds, chopped onions, garlic, and ginger, sauté until golden.
        3. Add diced potatoes, turmeric, and spinach paste.
        4. Cook until potatoes are tender.
      `,
      toShow: false,
    },
    {
      name: "Jeera Aloo Matar",
      ingreds: [
        "Potato",
        "Green Peas",
        "Ginger",
        "Cumin Seeds",
        "Turmeric",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add diced potatoes, turmeric, and green peas.
        4. Cook until potatoes and peas are tender.
      `,
      toShow: false,
    },

    {
      name: "Spinach and Green Peas Stir-Fry",
      ingreds: ["Spinach", "Green Peas", "Onion", "Garlic"],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add spinach and green peas, cook until tender.
      `,
      toShow: false,
    },

    {
      name: "Paneer Tikka",
      ingreds: ["Paneer", "Ginger", "Turmeric"],
      procedure: `
        1. Make a marinade with garlic, ginger, and turmeric.
        2. Coat paneer cubes with the marinade.
        3. Grill or bake until golden.
      `,
      toShow: false,
    },

    {
      name: "Aloo Paneer Curry",
      ingreds: ["Potato", "Paneer", "Tomato", "Turmeric"],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add chopped tomatoes and turmeric, cook until tomatoes are soft.
        4. Add diced potatoes and paneer cubes, cook until potatoes are tender.
      `,
      toShow: false,
    },

    {
      name: "Tomato Spinach Soup",
      ingreds: ["Tomato", "Spinach", "Garlic"],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add chopped tomatoes and spinach, cook until tender.
        4. Blend into a soup consistency.
      `,
      toShow: false,
    },

    {
      name: "Potato and Peas Curry",
      ingreds: [
        "Potato",
        "Green Peas",
        "Tomato",
        "Garlic",
        "Ginger",
        "Turmeric",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add chopped tomatoes and turmeric, cook until tomatoes are soft.
        4. Add diced potatoes and green peas, cook until tender.
      `,
      toShow: false,
    },

    {
      name: "Spinach and Paneer Salad",
      ingreds: ["Spinach", "Paneer", "Garlic", "Ginger"],
      procedure: `
        1. Blanch spinach, chop paneer into cubes.
        2. Mix spinach and paneer with minced garlic and ginger.
      `,
      toShow: false,
    },

    {
      name: "Paneer Bhurji",
      ingreds: [
        "Paneer",
        "Tomato",
        "Ginger",
        "Cumin Seeds",
        "Turmeric",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add chopped tomatoes and turmeric, cook until tomatoes are soft.
        4. Crumble paneer, add to the mixture, cook for 5 minutes.
      `,
      toShow: false,
    },

    {
      name: "Spinach Potato Stir-Fry",
      ingreds: [
        "Spinach",
        "Potato",
        "Onion",
        "Garlic",
        "Turmeric",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add diced potatoes, turmeric, and spinach.
        4. Cook until potatoes are tender.
      `,
      toShow: false,
    },

    {
      name: "Tomato Paneer Curry",
      ingreds: [
        "Tomato",
        "Paneer",
        "Ginger",
        "Turmeric",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add chopped tomatoes and turmeric, cook until tomatoes are soft.
        4. Add paneer cubes, cook for 10 minutes.
      `,
      toShow: false,
    },

    {
      name: "Peas Paneer Pulao",
      ingreds: ["Green Peas", "Paneer", "Onion", "Cumin Seeds"],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add green peas, turmeric, and paneer cubes, mix well.
        4. Serve with rice.
      `,
      toShow: false,
    },

    {
      name: "Aloo Gobi",
      ingreds: [
        "Potato",
        "Onion",
        "Ginger",
        "Cumin Seeds",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add diced potatoes and turmeric.
        4. Cook until potatoes are tender.
      `,
      toShow: false,
    },

    {
      name: "Spinach and Peas Curry",
      ingreds: [
        "Spinach",
        "Green Peas",
        "Garlic",
        "Ginger",
        "Turmeric",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add spinach, green peas, and turmeric.
        4. Cook until tender.
      `,
      toShow: false,
    },

    {
      name: "Paneer and Tomato Stir-Fry",
      ingreds: ["Paneer", "Tomato", "Ginger", "Cumin Seeds"],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add chopped tomatoes and paneer cubes, cook for 10 minutes.
      `,
      toShow: false,
    },

    {
      name: "Peas Potato Masala",
      ingreds: [
        "Potato",
        "Green Peas",
        "Tomato",
        "Onion",
        "Garlic",
        "Ginger",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add diced potatoes, chopped tomatoes, and turmeric, cook until potatoes are tender.
        4. Add green peas, cook for 5 minutes.
      `,
      toShow: false,
    },

    {
      name: "Spinach and Tomato Soup",
      ingreds: [
        "Spinach",
        "Tomato",
        "Onion",
        "Garlic",
        "Ginger",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add chopped tomatoes and spinach, cook until tender.
        4. Blend into a soup consistency.
      `,
      toShow: false,
    },

    {
      name: "Paneer and Spinach Curry",
      ingreds: [
        "Paneer",
        "Spinach",
        "Onion",
        "Ginger",
        "Turmeric",
      ],
      procedure: `
        1. Blanch spinach, blend into a paste.
        2. Heat oil, add cumin seeds, chopped onions, garlic, and ginger, sauté until golden.
        3. Add turmeric and spinach paste, cook for 5 minutes.
        4. Add paneer cubes, simmer for 10 minutes.
      `,
      toShow: false,
    },

    {
      name: "Aloo Tamatar",
      ingreds: [
        "Potato",
        "Tomato",
        "Onion",
        "Garlic",
        "Ginger",
        "Cumin Seeds",
        "Turmeric",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add chopped tomatoes and turmeric, cook until tomatoes are soft.
        4. Add diced potatoes, cook until tender.
      `,
      toShow: false,
    },

    {
      name: "Paneer Matar Masala",
      ingreds: [
        "Paneer",
        "Green Peas",
        "Tomato",
        "Onion",
        "Garlic",
        "Turmeric",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add chopped tomatoes and turmeric, cook until tomatoes are soft.
        4. Add paneer cubes and green peas, cook until done.
      `,
      toShow: false,
    },

    {
      name: "Spinach and Potato Patties",
      ingreds: [
        "Spinach",
        "Potato",
        "Garlic",
        "Ginger",
        "Cumin Seeds",
      ],
      procedure: `
        1. Boil and mash potatoes.
        2. Blanch and chop spinach.
        3. Mix potatoes, spinach, minced garlic, ginger, cumin seeds, and turmeric.
        4. Form patties and shallow fry until golden.
      `,
      toShow: false,
    },

    {
      name: "Tomato and Green Peas Soup",
      ingreds: [
        "Tomato",
        "Green Peas",
        "Onion",
        "Ginger",
        "Cumin Seeds",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add chopped tomatoes and green peas, cook until tender.
        4. Blend into a soup consistency.
      `,
      toShow: false,
    },

    {
      name: "Paneer and Potato Stir-Fry",
      ingreds: [
        "Paneer",
        "Potato",
        "Onion",
        "Turmeric",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add diced potatoes, turmeric, and paneer cubes.
        4. Cook until potatoes are tender.
      `,
      toShow: false,
    },

    {
      name: "Spinach and Paneer Gravy",
      ingreds: [
        "Spinach",
        "Paneer",
        "Onion",
        "Ginger",
        "Cumin Seeds",
        "Turmeric",
      ],
      procedure: `
        1. Blanch spinach, blend into a paste.
        2. Heat oil, add cumin seeds, chopped onions, garlic, and ginger, sauté until golden.
        3. Add turmeric and spinach paste, cook for 5 minutes.
        4. Add paneer cubes, simmer for 10 minutes.
      `,
      toShow: false,
    },

    {
      name: "Tomato and Potato Curry",
      ingreds: [
        "Tomato",
        "Potato",
        "Onion",
        "Garlic",
        "Ginger",
        "Turmeric",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add chopped tomatoes and turmeric, cook until tomatoes are soft.
        4. Add diced potatoes, cook until tender.
      `,
      toShow: false,
    },

    {
      name: "Peas and Paneer Pilaf",
      ingreds: [
        "Green Peas",
        "Paneer",
        "Garlic",
        "Ginger",
        "Turmeric",
      ],
      procedure: `
        1. Heat oil, add cumin seeds.
        2. Add chopped onions, garlic, and ginger, sauté until golden.
        3. Add green peas, turmeric, and paneer cubes, mix well.
        4. Serve with rice.
      `,
      toShow: false,
    },
  ];

  const [canMake, setCanMake] = useState([]);

  useEffect(() => {
    const selectedIngredients = items
      .filter((item) => item.isSelected)
      .map((item) => item.name);

    const availableRecipes = reciInfo.filter((recipe) =>
      recipe.ingreds.every((ingredient) =>
        selectedIngredients.includes(ingredient)
      )
    );
    setCanMake(availableRecipes);
  }, [items]);

  return (
    <>
      {canMake.length === 0 ? (
        <body class="flex items-center justify-center">
          <p className="bg-red-100 p-3 rounded-md text-xs border border-red-500">
            No recipes found, sure you don't have those spices?
          </p>
        </body>
      ) : (
        canMake.map((recipe, index) => (
          <div key={index}>
            <Recipe recipe={recipe} index={index} />
          </div>
        ))
      )}
    </>
  );
}

export default Recipies;
