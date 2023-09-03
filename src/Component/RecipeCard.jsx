import React from "react";

const RecipeCard = ({
  title,
  image,
  id,
  srchText,
  handleTryIt,
  ...details
}) => {
  return (
    <>
      <div className="card border border-0 recipe-card shadow col-4">
        <div className=" card-image-top recipe-image">
          <img src={image} alt="recipeimage" />
        </div>
        <div className="card-body">
          <div className="card-title recipe-name ">
            <h4 className="text-dark">
              <span className="text-capitalize recipe-name-with">
                {srchText}
              </span>{" "}
              with {title?.slice(0, 10)}
            </h4>
          </div>
          <div className="d-flex justify-content-end recipe-details-button">
            <button
              className="btn btn-dark p-1 pe-pointer"
              onClick={handleTryIt}
            >
              Try it
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
