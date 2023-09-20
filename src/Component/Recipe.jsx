import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import RecipeCard from "./RecipeCard";
import Search from "./Search";
import RecipeModal from "./RecipeModal";
import api from "../api";
import NoData from "./NoData";
import Para from "./Para";
import ShimmerLoader from "./ShimmerLoader";
import Footer from "./Footer";
const RecipeContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [alreadySearched, setAlreadySearched] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState("");

  const handleClose = () => {
    setSelectedRecipe("");
  };

  const catchFn = (e) => {
    let message = "There is no details about recipe!!";
    if (e?.response?.data?.code === 402)
      message =
        "Your dish has consumed maximun spoons per day see you tomorrow!!";
    toast.info(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
    });
  };
  const handleSelectedRecipe = (details) => {
    Promise.all([
      api.fetchRecipeSummary(details.id),
      api.fetchRecipeInstructions(details.id),
    ])
      .then(([res1, res3]) => {
        const recdetails = { id: details.id, image: details.image };
        if (res1.data) {
          recdetails.summary = res1.data.summary;
          recdetails.title = res1.data.title;
        }
        if (res3.data) {
          const [steps, ingredients] = res3.data[0].steps?.reduce(
            (acc, { step, ingredients }) => {
              let i = {};
              i.step = step;
              let _ingdts =
                ingredients
                  .map(({ name }) => name[0].toUpperCase() + name.slice(1))
                  .join(", ") || "Nil";
              acc[0].push(i);
              acc[1].push(_ingdts);
              return acc;
            },
            [[], []],
          );
          recdetails.steps = steps;
          recdetails.ingredients = ingredients;
        }
        setLoader(false);
        setSelectedRecipe(recdetails);
      })
      .catch(catchFn);
  };
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    e.stopPropagation();
  };

  const handleSearchBtn = (e) => {
    setRecipes([]);
    e.preventDefault();
    setLoader(true);
    const recipe = alreadySearched[searchText] ?? [];
    if (recipe.length) {
      setTimeout(() => {
        setRecipes(recipe);
        setLoader(false);
      }, 500);
    } else {
      setTimeout(() => {
        api
          .fetchRecipes(searchText)
          .then((res) => {
            if (res.data && res.data.results.length) {
              setRecipes(res.data.results);
              setAlreadySearched({
                ...alreadySearched,
                [searchText]: res.data.results,
              });
            } else {
              toast.info("There is no details about recipe!!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
              });
              setSearchText(" ");
            }
            setLoader(false);
          })
          .catch(catchFn);
      }, 2000);
    }
  };
  return (
    <>
      <div className="recipe-container d-flex flex-column  my-2">
        <Para />
        <Search
          searchText={searchText}
          handleSearch={handleSearch}
          handleSearchBtn={handleSearchBtn}
        />
        {recipes.length > 0 && (
          <p className="fs-6 m-auto bg-light fw-500 border border-1 border-light p-2">
            <span className="recipe-len fw-bold">{recipes.length}</span> Results
            found
          </p>
        )}

        <div className="row row-cols-12 gap-3 my-2 justify-content-center aign-items-center ">
          {loader && (
            <>
              <ShimmerLoader />
              <ShimmerLoader />
              <ShimmerLoader />
              <ShimmerLoader />
              <ShimmerLoader />
              <ShimmerLoader />
            </>
          )}
          {!loader && !recipes.length ? <NoData /> : null}
          {!loader && recipes.length ? (
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
            <> </>
          )}
        </div>
        <Footer />
      </div>
      {selectedRecipe && (
        <RecipeModal {...selectedRecipe} handleClose={handleClose} />
      )}
    </>
  );
};

export default RecipeContainer;
