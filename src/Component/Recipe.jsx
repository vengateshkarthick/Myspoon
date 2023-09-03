import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import RecipeCard from "./RecipeCard";
import Search from "./Search";
import RecipeModal from "./RecipeModal";
import api from "../api";
import NoData from "./NoData";
const RecipeContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState("");
  const handleClose = () => {
    setSelectedRecipe("");
  };
  const formatRecipeDetails = (details) => {
    return details;
  };
  const handleSelectedRecipe = (details) => {
    Promise.all([
      api.fetchRecipeSummary(details.id),
      api.fetchRecipeNutrientDetails(details.id),
      api.fetchRecipeInstructions(details.id),
    ])
      .then(([res1, res2, res3]) => {
        const recdetails = { id: details.id, image: details.image };
        if (res1.data) {
          recdetails.summary = res1.data.summary;
          recdetails.title = res1.data.title;
        }
        if (res3.data) {
          recdetails.steps = res3.data[0].steps?.map(
            ({ step, ingredients }) => {
              let i = {};
              i.step = step;
              i.ingridents =
                ingredients
                  .map(({ name }) => name[0].toUpperCase() + name.slice(1))
                  .join(" ") || "Nil";
              return i;
            }
          );
        }
        setSelectedRecipe(recdetails);
      })
      .catch((e) => {
        toast.info("There is no details about recipe!!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
      });
  };
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    e.stopPropagation();
  };

  const handleSearchBtn = (e) => {
    e.preventDefault();
    api
      .fetchRecipes(searchText)
      .then((res) => {
        if (res.data) {
          setRecipes(res.data.results);
        } else {
          toast.info("There is no details about recipe!!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
          });
          setSearchText(" ");
        }
      })
      .catch(() => {
        toast.info("There is no details about recipe!!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
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
        {recipes.length > 0 && (
          <p className="fs-6 m-auto  fw-500">
            <span className="recipe-len fw-semibold">{recipes.length}</span>{" "}
            Results found
          </p>
        )}

        <div className="row row-cols-12 gap-2 ms-3 my-2 justify-content-start aign-items-center">
          {recipes.length ? (
            recipes.map(({ title, image, id, ...details }) => (
              <RecipeCard
                title={title}
                image={image}
                handleTryIt={handleSelectedRecipe}
                id={id}
                {...details}
              />
            ))
          ) : (
            <NoData />
          )}
        </div>
      </div>
      {selectedRecipe && (
        <RecipeModal {...selectedRecipe} handleClose={handleClose} />
      )}
    </>
  );
};

export default RecipeContainer;
