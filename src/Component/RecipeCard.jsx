import React from "react";
import RecipeModal from "./RecipeModal";

const RecipeCard = ({ title, image, id, ...details }) => {
  return (
    <>
      <div className="recipe-card">
        <div className="recipe-image">
          <img src={image} alt="recipeimage" />
        </div>
        <div className="recipe-name">
          <h4>{title}</h4>
        </div>
        <div className="recipe-details-button">
          <button className="">More Details</button>
        </div>
      </div>
      <RecipeModal {...details} />
    </>
  );
};

export default RecipeCard;
