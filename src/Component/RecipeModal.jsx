import React from "react";
const RecipeModal = (recipeId, nutrients, steps, recipename) => {
  return (
    <div className="recipe-modal">
      <div className="recipe-name">{recipename}</div>
      <div className="steps">{steps.map(() => {})}</div>
      <div className="nutrients">{nutrients.map(() => {})}</div>
    </div>
  );
};

export default RecipeModal;
