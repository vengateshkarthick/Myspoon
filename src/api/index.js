import axios from "axios";
const API_KEY = "0d6f211c89864186878371efe1440407";
axios.defaults.baseURL = "https://api.spoonacular.com";
const axiosInstance = axios.create({
  params: {
    apiKey: API_KEY,
  },
});

const fetchRecipes = (srcTxt) =>
  axiosInstance.get("/recipes/complexSearch", {
    params: {
      query: srcTxt,
    },
  });

const fetchRecipeInstructions = (recipeId) =>
  axiosInstance.get(`recipes/${recipeId}/analyzedInstructions`);

const fetchRecipeSummary = (recipeId) =>
  axiosInstance.get(`recipes/${recipeId}/summary`);

const fetchRecipeNutrientDetails = (recipeId) =>
  axiosInstance.get(`recipes/${recipeId}/nutritionWidget.json`);

export default {
  fetchRecipeInstructions,
  fetchRecipeNutrientDetails,
  fetchRecipeSummary,
  fetchRecipeInstructions,
  fetchRecipes,
};

/*
{
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 11,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 2,
    "healthScore": 90,
    "creditsText": "foodista.com",
    "sourceName": "foodista.com",
    "pricePerServing": 168.12,
    "id": 654959,
    "title": "Pasta With Tuna",
    "readyInMinutes": 45,
    "servings": 4,
    "sourceUrl": "http://www.foodista.com/recipe/K6QWSKQM/pasta-with-tuna",
    "image": "https://spoonacular.com/recipeImages/654959-312x231.jpg",
    "imageType": "jpg",
    "nutrition": {
        "nutrients": [
            {
                "name": "Calories",
                "amount": 481.39,
                "unit": "kcal",
                "percentOfDailyNeeds": 24.07
            },
            {
                "name": "Fat",
                "amount": 10.61,
                "unit": "g",
                "percentOfDailyNeeds": 16.32
            },
            {
                "name": "Saturated Fat",
                "amount": 2.4,
                "unit": "g",
                "percentOfDailyNeeds": 15.02
            },
            {
                "name": "Carbohydrates",
                "amount": 68.1,
                "unit": "g",
                "percentOfDailyNeeds": 22.7
            },
            {
                "name": "Net Carbohydrates",
                "amount": 58.75,
                "unit": "g",
                "percentOfDailyNeeds": 21.36
            },
            {
                "name": "Sugar",
                "amount": 12.53,
                "unit": "g",
                "percentOfDailyNeeds": 13.92
            },
            {
                "name": "Cholesterol",
                "amount": 23.13,
                "unit": "mg",
                "percentOfDailyNeeds": 7.71
            },
            {
                "name": "Sodium",
                "amount": 260.67,
                "unit": "mg",
                "percentOfDailyNeeds": 11.33
            },
            {
                "name": "Protein",
                "amount": 28.25,
                "unit": "g",
                "percentOfDailyNeeds": 56.5
            },
            {
                "name": "Vitamin K",
                "amount": 329.23,
                "unit": "µg",
                "percentOfDailyNeeds": 313.55
            },
            {
                "name": "Selenium",
                "amount": 73.42,
                "unit": "µg",
                "percentOfDailyNeeds": 104.89
            },
            {
                "name": "Vitamin C",
                "amount": 68.71,
                "unit": "mg",
                "percentOfDailyNeeds": 83.28
            },
            {
                "name": "Manganese",
                "amount": 1.07,
                "unit": "mg",
                "percentOfDailyNeeds": 53.71
            },
            {
                "name": "Vitamin A",
                "amount": 2576.55,
                "unit": "IU",
                "percentOfDailyNeeds": 51.53
            },
            {
                "name": "Phosphorus",
                "amount": 436.5,
                "unit": "mg",
                "percentOfDailyNeeds": 43.65
            },
            {
                "name": "Vitamin B3",
                "amount": 8.47,
                "unit": "mg",
                "percentOfDailyNeeds": 42.35
            },
            {
                "name": "Fiber",
                "amount": 9.35,
                "unit": "g",
                "percentOfDailyNeeds": 37.38
            },
            {
                "name": "Folate",
                "amount": 131.33,
                "unit": "µg",
                "percentOfDailyNeeds": 32.83
            },
            {
                "name": "Vitamin B1",
                "amount": 0.46,
                "unit": "mg",
                "percentOfDailyNeeds": 30.53
            },
            {
                "name": "Vitamin B12",
                "amount": 1.7,
                "unit": "µg",
                "percentOfDailyNeeds": 28.38
            },
            {
                "name": "Calcium",
                "amount": 262.95,
                "unit": "mg",
                "percentOfDailyNeeds": 26.3
            },
            {
                "name": "Iron",
                "amount": 4.68,
                "unit": "mg",
                "percentOfDailyNeeds": 26.01
            },
            {
                "name": "Magnesium",
                "amount": 102.31,
                "unit": "mg",
                "percentOfDailyNeeds": 25.58
            },
            {
                "name": "Vitamin B6",
                "amount": 0.5,
                "unit": "mg",
                "percentOfDailyNeeds": 24.93
            },
            {
                "name": "Vitamin B2",
                "amount": 0.39,
                "unit": "mg",
                "percentOfDailyNeeds": 23.01
            },
            {
                "name": "Potassium",
                "amount": 770.32,
                "unit": "mg",
                "percentOfDailyNeeds": 22.01
            },
            {
                "name": "Zinc",
                "amount": 3.26,
                "unit": "mg",
                "percentOfDailyNeeds": 21.74
            },
            {
                "name": "Copper",
                "amount": 0.43,
                "unit": "mg",
                "percentOfDailyNeeds": 21.57
            },
            {
                "name": "Vitamin E",
                "amount": 1.63,
                "unit": "mg",
                "percentOfDailyNeeds": 10.87
            },
            {
                "name": "Vitamin D",
                "amount": 1.43,
                "unit": "µg",
                "percentOfDailyNeeds": 9.51
            },
            {
                "name": "Vitamin B5",
                "amount": 0.83,
                "unit": "mg",
                "percentOfDailyNeeds": 8.29
            }
        ],
        "properties": [
            {
                "name": "Glycemic Index",
                "amount": 100.31,
                "unit": ""
            },
            {
                "name": "Glycemic Load",
                "amount": 25.21,
                "unit": ""
            },
            {
                "name": "Nutrition Score",
                "amount": 35.802608695652175,
                "unit": "%"
            }
        ],
        "flavonoids": [
            {
                "name": "Cyanidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Petunidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Delphinidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Malvidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Pelargonidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Peonidin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Catechin",
                "amount": 0.01,
                "unit": "mg"
            },
            {
                "name": "Epigallocatechin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Epicatechin",
                "amount": 0.01,
                "unit": "mg"
            },
            {
                "name": "Epicatechin 3-gallate",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Epigallocatechin 3-gallate",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Theaflavin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Thearubigins",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Eriodictyol",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Hesperetin",
                "amount": 0,
                "unit": "mg"
            },
            {
                "name": "Naringenin",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Apigenin",
                "amount": 32.33,
                "unit": "mg"
            },
            {
                "name": "Luteolin",
                "amount": 0.17,
                "unit": "mg"
            },
            {
                "name": "Isorhamnetin",
                "amount": 0.25,
                "unit": "mg"
            },
            {
                "name": "Kaempferol",
                "amount": 0.6,
                "unit": "mg"
            },
            {
                "name": "Myricetin",
                "amount": 2.23,
                "unit": "mg"
            },
            {
                "name": "Quercetin",
                "amount": 3.73,
                "unit": "mg"
            },
            {
                "name": "Theaflavin-3,3'-digallate",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Theaflavin-3'-gallate",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Theaflavin-3-gallate",
                "amount": 0,
                "unit": ""
            },
            {
                "name": "Gallocatechin",
                "amount": 0,
                "unit": "mg"
            }
        ],
        "ingredients": [
            {
                "id": 20081,
                "name": "flour",
                "amount": 0.5,
                "unit": "tablespoons",
                "nutrients": [
                    {
                        "name": "Calories",
                        "amount": 13.65,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 24.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.57
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.01,
                        "unit": "µg",
                        "percentOfDailyNeeds": 313.55
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.17,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.01
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 23.01
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.08,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 2.76,
                        "unit": "g",
                        "percentOfDailyNeeds": 21.36
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 2.86,
                        "unit": "g",
                        "percentOfDailyNeeds": 22.7
                    },
                    {
                        "name": "Protein",
                        "amount": 0.39,
                        "unit": "g",
                        "percentOfDailyNeeds": 56.5
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 51.53
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 15.02
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.93
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.82,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.58
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 4.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.65
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.53
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.1,
                        "unit": "g",
                        "percentOfDailyNeeds": 37.38
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 5.78,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.02,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 1.27,
                        "unit": "µg",
                        "percentOfDailyNeeds": 104.89
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.22,
                        "unit": "mg",
                        "percentOfDailyNeeds": 42.35
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 53.71
                    },
                    {
                        "name": "Fat",
                        "amount": 0.04,
                        "unit": "g",
                        "percentOfDailyNeeds": 16.32
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.56,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.3
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.87
                    },
                    {
                        "name": "Choline",
                        "amount": 0.39,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.51
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.29
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.71
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 28.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 4.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.01
                    },
                    {
                        "name": "Folate",
                        "amount": 6.86,
                        "unit": "µg",
                        "percentOfDailyNeeds": 32.83
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 83.28
                    }
                ]
            },
            {
                "id": 11291,
                "name": "green onions",
                "amount": 0.25,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Calories",
                        "amount": 8,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 24.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.57
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 51.75,
                        "unit": "µg",
                        "percentOfDailyNeeds": 313.55
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.37,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.01
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 23.01
                    },
                    {
                        "name": "Sodium",
                        "amount": 4,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 1.18,
                        "unit": "g",
                        "percentOfDailyNeeds": 21.36
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 1.84,
                        "unit": "g",
                        "percentOfDailyNeeds": 22.7
                    },
                    {
                        "name": "Protein",
                        "amount": 0.46,
                        "unit": "g",
                        "percentOfDailyNeeds": 56.5
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 249.25,
                        "unit": "IU",
                        "percentOfDailyNeeds": 51.53
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 15.02
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.93
                    },
                    {
                        "name": "Magnesium",
                        "amount": 5,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.58
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 9.25,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.65
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.53
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.65,
                        "unit": "g",
                        "percentOfDailyNeeds": 37.38
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.02,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.15,
                        "unit": "µg",
                        "percentOfDailyNeeds": 104.89
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.13,
                        "unit": "mg",
                        "percentOfDailyNeeds": 42.35
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 53.71
                    },
                    {
                        "name": "Fat",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 16.32
                    },
                    {
                        "name": "Calcium",
                        "amount": 18,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.3
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.87
                    },
                    {
                        "name": "Choline",
                        "amount": 1.42,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.51
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.29
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.71
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 28.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 69,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.01
                    },
                    {
                        "name": "Folate",
                        "amount": 16,
                        "unit": "µg",
                        "percentOfDailyNeeds": 32.83
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.58,
                        "unit": "g",
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 4.7,
                        "unit": "mg",
                        "percentOfDailyNeeds": 83.28
                    }
                ]
            },
            {
                "id": 1085,
                "name": "non-fat milk",
                "amount": 0.31,
                "unit": "cups",
                "nutrients": [
                    {
                        "name": "Calories",
                        "amount": 26.03,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 24.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.57
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.34,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 313.55
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.01
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 23.01
                    },
                    {
                        "name": "Sodium",
                        "amount": 31.39,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 3.74,
                        "unit": "g",
                        "percentOfDailyNeeds": 21.36
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 3.74,
                        "unit": "g",
                        "percentOfDailyNeeds": 22.7
                    },
                    {
                        "name": "Protein",
                        "amount": 2.63,
                        "unit": "g",
                        "percentOfDailyNeeds": 56.5
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 156.19,
                        "unit": "IU",
                        "percentOfDailyNeeds": 51.53
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.04,
                        "unit": "g",
                        "percentOfDailyNeeds": 15.02
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.93
                    },
                    {
                        "name": "Magnesium",
                        "amount": 9.19,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.58
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 81.92,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.65
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.53
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 37.38
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 1.53,
                        "unit": "µg",
                        "percentOfDailyNeeds": 104.89
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.09,
                        "unit": "mg",
                        "percentOfDailyNeeds": 42.35
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 53.71
                    },
                    {
                        "name": "Fat",
                        "amount": 0.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 16.32
                    },
                    {
                        "name": "Calcium",
                        "amount": 101.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.3
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.87
                    },
                    {
                        "name": "Choline",
                        "amount": 13.93,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.84,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.51
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.27,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.29
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 2.3,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.71
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.44,
                        "unit": "µg",
                        "percentOfDailyNeeds": 28.38
                    },
                    {
                        "name": "Fluoride",
                        "amount": 2.37,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 127.86,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.01
                    },
                    {
                        "name": "Folate",
                        "amount": 1.53,
                        "unit": "µg",
                        "percentOfDailyNeeds": 32.83
                    },
                    {
                        "name": "Sugar",
                        "amount": 3.87,
                        "unit": "g",
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 83.28
                    }
                ]
            },
            {
                "id": 4053,
                "name": "olive oil",
                "amount": 0.5,
                "unit": "tablespoons",
                "nutrients": [
                    {
                        "name": "Calories",
                        "amount": 61.88,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 24.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.57
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 4.21,
                        "unit": "µg",
                        "percentOfDailyNeeds": 313.55
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.01
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 23.01
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 21.36
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 22.7
                    },
                    {
                        "name": "Protein",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 56.5
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 51.53
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.97,
                        "unit": "g",
                        "percentOfDailyNeeds": 15.02
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.93
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.58
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.65
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.53
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 37.38
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 5.11,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.74,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 104.89
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 42.35
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 53.71
                    },
                    {
                        "name": "Fat",
                        "amount": 7,
                        "unit": "g",
                        "percentOfDailyNeeds": 16.32
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.07,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.3
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 1.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.87
                    },
                    {
                        "name": "Choline",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.51
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.29
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.71
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 28.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 0.07,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.01
                    },
                    {
                        "name": "Folate",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 32.83
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 83.28
                    }
                ]
            },
            {
                "id": 11282,
                "name": "onion",
                "amount": 0.5,
                "unit": "tablespoons",
                "nutrients": [
                    {
                        "name": "Calories",
                        "amount": 2,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 24.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.57
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.02,
                        "unit": "µg",
                        "percentOfDailyNeeds": 313.55
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.01
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 23.01
                    },
                    {
                        "name": "Sodium",
                        "amount": 0.2,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.38,
                        "unit": "g",
                        "percentOfDailyNeeds": 21.36
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.47,
                        "unit": "g",
                        "percentOfDailyNeeds": 22.7
                    },
                    {
                        "name": "Protein",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 56.5
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.1,
                        "unit": "IU",
                        "percentOfDailyNeeds": 51.53
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 15.02
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.93
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.5,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.58
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 1.45,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.65
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.53
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.09,
                        "unit": "g",
                        "percentOfDailyNeeds": 37.38
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.03,
                        "unit": "µg",
                        "percentOfDailyNeeds": 104.89
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 42.35
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 53.71
                    },
                    {
                        "name": "Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 16.32
                    },
                    {
                        "name": "Calcium",
                        "amount": 1.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.3
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.87
                    },
                    {
                        "name": "Choline",
                        "amount": 0.31,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.51
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.29
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.71
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 28.38
                    },
                    {
                        "name": "Fluoride",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 7.3,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.01
                    },
                    {
                        "name": "Folate",
                        "amount": 0.95,
                        "unit": "µg",
                        "percentOfDailyNeeds": 32.83
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.21,
                        "unit": "g",
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.37,
                        "unit": "mg",
                        "percentOfDailyNeeds": 83.28
                    }
                ]
            },
            {
                "id": 1033,
                "name": "parmesan cheese",
                "amount": 0.06,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Calories",
                        "amount": 24.5,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 24.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.57
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.17,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.11,
                        "unit": "µg",
                        "percentOfDailyNeeds": 313.55
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.01
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 23.01
                    },
                    {
                        "name": "Sodium",
                        "amount": 100.13,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.2,
                        "unit": "g",
                        "percentOfDailyNeeds": 21.36
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.2,
                        "unit": "g",
                        "percentOfDailyNeeds": 22.7
                    },
                    {
                        "name": "Protein",
                        "amount": 2.23,
                        "unit": "g",
                        "percentOfDailyNeeds": 56.5
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 48.81,
                        "unit": "IU",
                        "percentOfDailyNeeds": 51.53
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 1.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 15.02
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.93
                    },
                    {
                        "name": "Magnesium",
                        "amount": 2.75,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.58
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 43.38,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.65
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.53
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 37.38
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.47,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.04,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 1.41,
                        "unit": "µg",
                        "percentOfDailyNeeds": 104.89
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 42.35
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 53.71
                    },
                    {
                        "name": "Fat",
                        "amount": 1.61,
                        "unit": "g",
                        "percentOfDailyNeeds": 16.32
                    },
                    {
                        "name": "Calcium",
                        "amount": 74,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.3
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.87
                    },
                    {
                        "name": "Choline",
                        "amount": 0.96,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.03,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.51
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.29
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 4.25,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.71
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.08,
                        "unit": "µg",
                        "percentOfDailyNeeds": 28.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 5.75,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.01
                    },
                    {
                        "name": "Folate",
                        "amount": 0.44,
                        "unit": "µg",
                        "percentOfDailyNeeds": 32.83
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 83.28
                    }
                ]
            },
            {
                "id": 10511297,
                "name": "parsley",
                "amount": 0.25,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Calories",
                        "amount": 5.4,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 24.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.57
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.16,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 246,
                        "unit": "µg",
                        "percentOfDailyNeeds": 313.55
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.93,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.01
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 23.01
                    },
                    {
                        "name": "Sodium",
                        "amount": 8.4,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.45,
                        "unit": "g",
                        "percentOfDailyNeeds": 21.36
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.95,
                        "unit": "g",
                        "percentOfDailyNeeds": 22.7
                    },
                    {
                        "name": "Protein",
                        "amount": 0.45,
                        "unit": "g",
                        "percentOfDailyNeeds": 56.5
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 1263.6,
                        "unit": "IU",
                        "percentOfDailyNeeds": 51.53
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.02,
                        "unit": "g",
                        "percentOfDailyNeeds": 15.02
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.93
                    },
                    {
                        "name": "Magnesium",
                        "amount": 7.5,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.58
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 8.7,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.65
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.53
                    },
                    {
                        "name": "Fiber",
                        "amount": 0.5,
                        "unit": "g",
                        "percentOfDailyNeeds": 37.38
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.04,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.02,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.01,
                        "unit": "µg",
                        "percentOfDailyNeeds": 104.89
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.2,
                        "unit": "mg",
                        "percentOfDailyNeeds": 42.35
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 53.71
                    },
                    {
                        "name": "Fat",
                        "amount": 0.12,
                        "unit": "g",
                        "percentOfDailyNeeds": 16.32
                    },
                    {
                        "name": "Calcium",
                        "amount": 20.7,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.3
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.87
                    },
                    {
                        "name": "Choline",
                        "amount": 1.92,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.51
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.29
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.71
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 28.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 83.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.01
                    },
                    {
                        "name": "Folate",
                        "amount": 22.8,
                        "unit": "µg",
                        "percentOfDailyNeeds": 32.83
                    },
                    {
                        "name": "Sugar",
                        "amount": 0.13,
                        "unit": "g",
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 19.95,
                        "unit": "mg",
                        "percentOfDailyNeeds": 83.28
                    }
                ]
            },
            {
                "id": 20420,
                "name": "tubular pasta",
                "amount": 2,
                "unit": "ounces",
                "nutrients": [
                    {
                        "name": "Trans Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.21
                    },
                    {
                        "name": "Calories",
                        "amount": 210.35,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 24.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.16,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.57
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.8,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.06,
                        "unit": "µg",
                        "percentOfDailyNeeds": 313.55
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.74,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.01
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 23.01
                    },
                    {
                        "name": "Sodium",
                        "amount": 3.4,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.33
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 42.34,
                        "unit": "g",
                        "percentOfDailyNeeds": 22.7
                    },
                    {
                        "name": "Protein",
                        "amount": 7.39,
                        "unit": "g",
                        "percentOfDailyNeeds": 56.5
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0,
                        "unit": "IU",
                        "percentOfDailyNeeds": 51.53
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 40.52,
                        "unit": "g",
                        "percentOfDailyNeeds": 21.36
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.16,
                        "unit": "g",
                        "percentOfDailyNeeds": 15.02
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.08,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.93
                    },
                    {
                        "name": "Magnesium",
                        "amount": 30.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.58
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 107.16,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.65
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.53
                    },
                    {
                        "name": "Fiber",
                        "amount": 1.81,
                        "unit": "g",
                        "percentOfDailyNeeds": 37.38
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.1,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.32,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 35.83,
                        "unit": "µg",
                        "percentOfDailyNeeds": 104.89
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.96,
                        "unit": "mg",
                        "percentOfDailyNeeds": 42.35
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.52,
                        "unit": "mg",
                        "percentOfDailyNeeds": 53.71
                    },
                    {
                        "name": "Fat",
                        "amount": 0.86,
                        "unit": "g",
                        "percentOfDailyNeeds": 16.32
                    },
                    {
                        "name": "Calcium",
                        "amount": 11.91,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.3
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.87
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.51
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.24,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.29
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.71
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 28.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 126.44,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.01
                    },
                    {
                        "name": "Folate",
                        "amount": 10.21,
                        "unit": "µg",
                        "percentOfDailyNeeds": 32.83
                    },
                    {
                        "name": "Sugar",
                        "amount": 1.51,
                        "unit": "g",
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 83.28
                    }
                ]
            },
            {
                "id": 11304,
                "name": "peas",
                "amount": 0.25,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Calories",
                        "amount": 29.36,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 24.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.57
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.45,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 8.99,
                        "unit": "µg",
                        "percentOfDailyNeeds": 313.55
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.53,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.01
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 23.01
                    },
                    {
                        "name": "Sodium",
                        "amount": 1.81,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 3.15,
                        "unit": "g",
                        "percentOfDailyNeeds": 21.36
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 5.22,
                        "unit": "g",
                        "percentOfDailyNeeds": 22.7
                    },
                    {
                        "name": "Protein",
                        "amount": 1.96,
                        "unit": "g",
                        "percentOfDailyNeeds": 56.5
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 277.31,
                        "unit": "IU",
                        "percentOfDailyNeeds": 51.53
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 15.02
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.93
                    },
                    {
                        "name": "Magnesium",
                        "amount": 11.96,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.58
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 39.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.65
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.53
                    },
                    {
                        "name": "Fiber",
                        "amount": 2.07,
                        "unit": "g",
                        "percentOfDailyNeeds": 37.38
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.07,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.65,
                        "unit": "µg",
                        "percentOfDailyNeeds": 104.89
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.76,
                        "unit": "mg",
                        "percentOfDailyNeeds": 42.35
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 53.71
                    },
                    {
                        "name": "Fat",
                        "amount": 0.14,
                        "unit": "g",
                        "percentOfDailyNeeds": 16.32
                    },
                    {
                        "name": "Calcium",
                        "amount": 9.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.3
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.87
                    },
                    {
                        "name": "Choline",
                        "amount": 10.3,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.51
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.29
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.71
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 28.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 88.45,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.01
                    },
                    {
                        "name": "Folate",
                        "amount": 23.56,
                        "unit": "µg",
                        "percentOfDailyNeeds": 32.83
                    },
                    {
                        "name": "Sugar",
                        "amount": 2.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 14.5,
                        "unit": "mg",
                        "percentOfDailyNeeds": 83.28
                    }
                ]
            },
            {
                "id": 11304,
                "name": "peas",
                "amount": 0.25,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Calories",
                        "amount": 29.36,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 24.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.57
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.45,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 8.99,
                        "unit": "µg",
                        "percentOfDailyNeeds": 313.55
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.53,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.01
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 23.01
                    },
                    {
                        "name": "Sodium",
                        "amount": 1.81,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 3.15,
                        "unit": "g",
                        "percentOfDailyNeeds": 21.36
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 5.22,
                        "unit": "g",
                        "percentOfDailyNeeds": 22.7
                    },
                    {
                        "name": "Protein",
                        "amount": 1.96,
                        "unit": "g",
                        "percentOfDailyNeeds": 56.5
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 277.31,
                        "unit": "IU",
                        "percentOfDailyNeeds": 51.53
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 15.02
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.93
                    },
                    {
                        "name": "Magnesium",
                        "amount": 11.96,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.58
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 39.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.65
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.53
                    },
                    {
                        "name": "Fiber",
                        "amount": 2.07,
                        "unit": "g",
                        "percentOfDailyNeeds": 37.38
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.07,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.65,
                        "unit": "µg",
                        "percentOfDailyNeeds": 104.89
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.76,
                        "unit": "mg",
                        "percentOfDailyNeeds": 42.35
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 53.71
                    },
                    {
                        "name": "Fat",
                        "amount": 0.14,
                        "unit": "g",
                        "percentOfDailyNeeds": 16.32
                    },
                    {
                        "name": "Calcium",
                        "amount": 9.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.3
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.87
                    },
                    {
                        "name": "Choline",
                        "amount": 10.3,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.51
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.29
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.71
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 28.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 88.45,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.01
                    },
                    {
                        "name": "Folate",
                        "amount": 23.56,
                        "unit": "µg",
                        "percentOfDailyNeeds": 32.83
                    },
                    {
                        "name": "Sugar",
                        "amount": 2.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 14.5,
                        "unit": "mg",
                        "percentOfDailyNeeds": 83.28
                    }
                ]
            },
            {
                "id": 11304,
                "name": "peas",
                "amount": 0.25,
                "unit": "cup",
                "nutrients": [
                    {
                        "name": "Calories",
                        "amount": 29.36,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 24.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.57
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.45,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 8.99,
                        "unit": "µg",
                        "percentOfDailyNeeds": 313.55
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.53,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.01
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 23.01
                    },
                    {
                        "name": "Sodium",
                        "amount": 1.81,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 3.15,
                        "unit": "g",
                        "percentOfDailyNeeds": 21.36
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 5.22,
                        "unit": "g",
                        "percentOfDailyNeeds": 22.7
                    },
                    {
                        "name": "Protein",
                        "amount": 1.96,
                        "unit": "g",
                        "percentOfDailyNeeds": 56.5
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 277.31,
                        "unit": "IU",
                        "percentOfDailyNeeds": 51.53
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.03,
                        "unit": "g",
                        "percentOfDailyNeeds": 15.02
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.93
                    },
                    {
                        "name": "Magnesium",
                        "amount": 11.96,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.58
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 39.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.65
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.1,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.53
                    },
                    {
                        "name": "Fiber",
                        "amount": 2.07,
                        "unit": "g",
                        "percentOfDailyNeeds": 37.38
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.01,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.07,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 0.65,
                        "unit": "µg",
                        "percentOfDailyNeeds": 104.89
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0.76,
                        "unit": "mg",
                        "percentOfDailyNeeds": 42.35
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 53.71
                    },
                    {
                        "name": "Fat",
                        "amount": 0.14,
                        "unit": "g",
                        "percentOfDailyNeeds": 16.32
                    },
                    {
                        "name": "Calcium",
                        "amount": 9.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.3
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.87
                    },
                    {
                        "name": "Choline",
                        "amount": 10.3,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.51
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.29
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.71
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 28.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 88.45,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.01
                    },
                    {
                        "name": "Folate",
                        "amount": 23.56,
                        "unit": "µg",
                        "percentOfDailyNeeds": 32.83
                    },
                    {
                        "name": "Sugar",
                        "amount": 2.06,
                        "unit": "g",
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 14.5,
                        "unit": "mg",
                        "percentOfDailyNeeds": 83.28
                    }
                ]
            },
            {
                "id": 6168,
                "name": "dsh pepper sauce",
                "amount": 0.25,
                "unit": "",
                "nutrients": [
                    {
                        "name": "Calories",
                        "amount": 0.03,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 24.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.57
                    },
                    {
                        "name": "Zinc",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.01,
                        "unit": "µg",
                        "percentOfDailyNeeds": 313.55
                    },
                    {
                        "name": "Iron",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.01
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 23.01
                    },
                    {
                        "name": "Sodium",
                        "amount": 6.61,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 21.36
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 22.7
                    },
                    {
                        "name": "Protein",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 56.5
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 0.41,
                        "unit": "IU",
                        "percentOfDailyNeeds": 51.53
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 15.02
                    },
                    {
                        "name": "Magnesium",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.58
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.93
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 0.03,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.65
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.53
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 37.38
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 104.89
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 42.35
                    },
                    {
                        "name": "Manganese",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 53.71
                    },
                    {
                        "name": "Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 16.32
                    },
                    {
                        "name": "Calcium",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.3
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.87
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.29
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.71
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 28.38
                    },
                    {
                        "name": "Potassium",
                        "amount": 0.36,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.01
                    },
                    {
                        "name": "Folate",
                        "amount": 0.01,
                        "unit": "µg",
                        "percentOfDailyNeeds": 32.83
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0.19,
                        "unit": "mg",
                        "percentOfDailyNeeds": 83.28
                    }
                ]
            },
            {
                "id": 15121,
                "name": "water-packed tuna",
                "amount": 1.63,
                "unit": "ounces",
                "nutrients": [
                    {
                        "name": "Trans Fat",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 9.21
                    },
                    {
                        "name": "Calories",
                        "amount": 41.46,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 24.07
                    },
                    {
                        "name": "Copper",
                        "amount": 0.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.57
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.3,
                        "unit": "mg",
                        "percentOfDailyNeeds": 21.74
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 0.09,
                        "unit": "µg",
                        "percentOfDailyNeeds": 313.55
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Iron",
                        "amount": 0.77,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.01
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 23.01
                    },
                    {
                        "name": "Sodium",
                        "amount": 100.89,
                        "unit": "mg",
                        "percentOfDailyNeeds": 11.33
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 0.04,
                        "unit": "g",
                        "percentOfDailyNeeds": 21.36
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 0.04,
                        "unit": "g",
                        "percentOfDailyNeeds": 22.7
                    },
                    {
                        "name": "Protein",
                        "amount": 8.75,
                        "unit": "g",
                        "percentOfDailyNeeds": 56.5
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 26.26,
                        "unit": "IU",
                        "percentOfDailyNeeds": 51.53
                    },
                    {
                        "name": "Lycopene",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 0.1,
                        "unit": "g",
                        "percentOfDailyNeeds": 15.02
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.93
                    },
                    {
                        "name": "Magnesium",
                        "amount": 10.6,
                        "unit": "mg",
                        "percentOfDailyNeeds": 25.58
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 63.11,
                        "unit": "mg",
                        "percentOfDailyNeeds": 43.65
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.53
                    },
                    {
                        "name": "Fiber",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 37.38
                    },
                    {
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.05,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Folic Acid",
                        "amount": 0,
                        "unit": "µg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.12,
                        "unit": "g",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Selenium",
                        "amount": 31.23,
                        "unit": "µg",
                        "percentOfDailyNeeds": 104.89
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 4.57,
                        "unit": "mg",
                        "percentOfDailyNeeds": 42.35
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg",
                        "percentOfDailyNeeds": 53.71
                    },
                    {
                        "name": "Fat",
                        "amount": 0.43,
                        "unit": "g",
                        "percentOfDailyNeeds": 16.32
                    },
                    {
                        "name": "Calcium",
                        "amount": 8.29,
                        "unit": "mg",
                        "percentOfDailyNeeds": 26.3
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 0.15,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.87
                    },
                    {
                        "name": "Choline",
                        "amount": 13.5,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Vitamin D",
                        "amount": 0.55,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.51
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 0.07,
                        "unit": "mg",
                        "percentOfDailyNeeds": 8.29
                    },
                    {
                        "name": "Caffeine",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 16.58,
                        "unit": "mg",
                        "percentOfDailyNeeds": 7.71
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 1.18,
                        "unit": "µg",
                        "percentOfDailyNeeds": 28.38
                    },
                    {
                        "name": "Fluoride",
                        "amount": 8.57,
                        "unit": "mg",
                        "percentOfDailyNeeds": 0
                    },
                    {
                        "name": "Potassium",
                        "amount": 81.08,
                        "unit": "mg",
                        "percentOfDailyNeeds": 22.01
                    },
                    {
                        "name": "Folate",
                        "amount": 1.84,
                        "unit": "µg",
                        "percentOfDailyNeeds": 32.83
                    },
                    {
                        "name": "Sugar",
                        "amount": 0,
                        "unit": "g",
                        "percentOfDailyNeeds": 13.92
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 0,
                        "unit": "mg",
                        "percentOfDailyNeeds": 83.28
                    }
                ]
            }
        ],
        "caloricBreakdown": {
            "percentProtein": 23.5,
            "percentFat": 19.86,
            "percentCarbs": 56.64
        },
        "weightPerServing": {
            "amount": 350,
            "unit": "g"
        }
    },
    "summary": "Pasta With Tunan is a <b>pescatarian</b> main course. This recipe serves 4. For <b>$1.68 per serving</b>, this recipe <b>covers 28%</b> of your daily requirements of vitamins and minerals. One serving contains <b>423 calories</b>, <b>24g of protein</b>, and <b>10g of fat</b>. 2 people have made this recipe and would make it again. This recipe from Foodista requires flour, parsley, non-fat milk, and parmesan cheese. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 92%</b>. This score is amazing. <a href=\"https://spoonacular.com/recipes/pasta-and-tuna-salad-ensalada-de-pasta-y-atn-226303\">Pastan and Tuna Salad (Ensalada de Pasta y Atún)</a>, <a href=\"https://spoonacular.com/recipes/tuna-pasta-565100\">Tuna Pasta</a>, and <a href=\"https://spoonacular.com/recipes/tuna-pasta-89136\">Tuna Pasta</a> are very similar to this recipe.",
    "cuisines": [],
    "dishTypes": [
        "side dish",
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "diets": [
        "pescatarian"
    ],
    "occasions": [],
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Cook pasta in a large pot of boiling water until al dente.",
                    "ingredients": [
                        {
                            "id": 20420,
                            "name": "pasta",
                            "localizedName": "pasta",
                            "image": "fusilli.jpg"
                        },
                        {
                            "id": 14412,
                            "name": "water",
                            "localizedName": "water",
                            "image": "water.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404752,
                            "name": "pot",
                            "localizedName": "pot",
                            "image": "stock-pot.jpg"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Drain and return to warm pot. Put olive oil in saucepan and add onion.",
                    "ingredients": [
                        {
                            "id": 4053,
                            "name": "olive oil",
                            "localizedName": "olive oil",
                            "image": "olive-oil.jpg"
                        },
                        {
                            "id": 11282,
                            "name": "onion",
                            "localizedName": "onion",
                            "image": "brown-onion.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404669,
                            "name": "sauce pan",
                            "localizedName": "sauce pan",
                            "image": "sauce-pan.jpg"
                        },
                        {
                            "id": 404752,
                            "name": "pot",
                            "localizedName": "pot",
                            "image": "stock-pot.jpg"
                        }
                    ]
                },
                {
                    "number": 3,
                    "step": "Saute until transparent. Stir in flour and cook for a few seconds and then whisk in milk. Stir constantly until this thickens.",
                    "ingredients": [
                        {
                            "id": 20081,
                            "name": "all purpose flour",
                            "localizedName": "all purpose flour",
                            "image": "flour.png"
                        },
                        {
                            "id": 1077,
                            "name": "milk",
                            "localizedName": "milk",
                            "image": "milk.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404661,
                            "name": "whisk",
                            "localizedName": "whisk",
                            "image": "whisk.png"
                        }
                    ]
                },
                {
                    "number": 4,
                    "step": "Add peas, tuna (shredded into chunks,) parsley, green onions, cheese and hot pepper sauce.",
                    "ingredients": [
                        {
                            "id": 6168,
                            "name": "hot sauce",
                            "localizedName": "hot sauce",
                            "image": "hot-sauce-or-tabasco.png"
                        },
                        {
                            "id": 11291,
                            "name": "green onions",
                            "localizedName": "green onions",
                            "image": "spring-onions.jpg"
                        },
                        {
                            "id": 11297,
                            "name": "parsley",
                            "localizedName": "parsley",
                            "image": "parsley.jpg"
                        },
                        {
                            "id": 1041009,
                            "name": "cheese",
                            "localizedName": "cheese",
                            "image": "cheddar-cheese.png"
                        },
                        {
                            "id": 11304,
                            "name": "peas",
                            "localizedName": "peas",
                            "image": "peas.jpg"
                        },
                        {
                            "id": 10015121,
                            "name": "tuna",
                            "localizedName": "tuna",
                            "image": "canned-tuna.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 5,
                    "step": "Pour over pasta and stir gently to mix.",
                    "ingredients": [
                        {
                            "id": 20420,
                            "name": "pasta",
                            "localizedName": "pasta",
                            "image": "fusilli.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 6,
                    "step": "Serve at once.",
                    "ingredients": [],
                    "equipment": []
                }
            ]
        }
    ],
    "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-tuna-654959"
}

*/
