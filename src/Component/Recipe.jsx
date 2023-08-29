import React from "react";
import RecipeCard from "./RecipeCard";
const RecipeContainer = (recipes) => {
  return (
    <div className="recipe-container">
      {recipes.map(({ title, image, id, ...details }) => (
        <RecipeCard title={title} image={image} id={id} {...details} />
      ))}
    </div>
  );
};

export default RecipeContainer;
