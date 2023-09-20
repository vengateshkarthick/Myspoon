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
      className="card  col-3 px-0 m-3 recipe-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="card-body w-100 d-flex flex-column justify-content-end align-self-end">
        <div className="recipe-name d-flex align-items-center justify-content-center  m-1">
          <h4 className="text-dark bg-light p-2">
            <span className="text-capitalize card-title fw-bolder recipe-name-with">
              {title}
            </span>
          </h4>
        </div>
        <div className="d-flex justify-content-end recipe-details-button ">
          <button
            className="btn  p-1 px-2 pe-pointer fw-bolder"
            onClick={handleSelect}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
