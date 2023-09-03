import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  params: {
    apiKey: process?.env?.API_KEY,
  },
});

const fetchRecipes = (srcTxt) =>
  axiosInstance.get("/api.spoonacular.com/recipes/complexSearch", {
    params: {
      query: srcTxt,
      instructionsRequired: true,
      addRecipeInformation: true,
      addRecipeNutrition: true,
    },
  });

const fetchRecipeInstructions = (recipeId) =>
  axiosInstance.get(
    `/api.spoonacular.com/recipes/${recipeId}/analyzedInstructions`
  );

const fetchRecipeSummary = (recipeId) =>
  axiosInstance.get(`/api.spoonacular.com/recipes/${recipeId}/summary`);

const fetchRecipeNutrientDetails = (recipeId) =>
  axiosInstance.get(
    `/api.spoonacular.com/food/ingredients/${recipeId}/information`
  );

export default {
  fetchRecipeInstructions,
  fetchRecipeNutrientDetails,
  fetchRecipeSummary,
  fetchRecipeInstructions,
  fetchRecipes,
};
