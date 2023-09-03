import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Search from "./Search";
import RecipeModal from "./RecipeModal";
import Bag from "../assests/bag.svg";
import api from "../api";
const RecipeContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(-1);

  const formatRecipeDetails = (details) => {
    return details;
  };
  const handleSelectedRecipe = (details) => {
    setSelectedRecipe(formatRecipeDetails(details));
  };
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    e.stopPropagation();
  };

  const handleSearchBtn = (e) => {
    e.preventDefault();
    api.fetchRecipes(searchText).then((res) => {
      if (res.data) {
        setRecipes(res.data.results);
      }
    });
  };
  return (
    <>
      <div className="recipe-container d-flex flex-column">
        <Search
          searchText={searchText}
          handleSearch={handleSearch}
          handleSearchBtn={handleSearchBtn}
        />
        <p className="fs-6 m-auto  fw-500">
          <span className="recipe-len fw-semibold">{recipes.length}</span>{" "}
          Results found
        </p>
        <div className="row row-cols-12 justify-content-start aign-items-center">
          {recipes.length ? (
            recipes.map(({ title, image, id, ...details }) => (
              <RecipeCard
                title={title}
                image={image}
                handleTryIt={handleSelectedRecipe}
                id={id}
                srchText={searchText}
                {...details}
                onSelect={handleSelectedRecipe}
              />
            ))
          ) : (
            <div className="d-flex gap-3 justify-content-center align-items-center">
              <p className="text-dark">Oops!, no items in groceris</p>
              <p className="no-data-image">
                <img src={Bag} alt="no data" />
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RecipeContainer;
