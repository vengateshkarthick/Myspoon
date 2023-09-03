import React from "react";

const RecipeCard = ({
  title,
  image,
  id,
  srchText,
  handleTryIt,
  ...details
}) => {
  const handleSelect = () => {
    handleTryIt({ title, id, image, ...details });
  };
  return (
    <div
      className="card border-0 col-3 px-0 m-2 recipe-card pe-pointer"
      style={{ width: "17rem" }}
    >
      <img className="card-img-top" src={image} alt="recipeimage" />
      <div className="card-body w-100">
        <div className="recipe-name ">
          <h4 className="text-dark">
            <span className="text-capitalize card-title fw-500 recipe-name-with">
              {title}
            </span>
          </h4>
        </div>
        <div className="d-flex justify-content-end recipe-details-button">
          <button className="btn  p-1 pe-pointer" onClick={handleSelect}>
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
