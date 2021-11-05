const searchForm = document.querySelector("form");
const searchResults = document.querySelector(".search-results");
const apiKey = "43e5c6f82762450d8b2df5e84351074e";

// fill out 3-5 ingredient inputs
const ingredient1 = document.querySelector(".ingredient1");
const ingredient2 = document.querySelector(".ingredient2");
const ingredient3 = document.querySelector(".ingredient3");
const ingredient4 = document.querySelector(".ingredient4");
const ingredient5 = document.querySelector(".ingredient5");

// Get food value out of form
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  fetchApi(
    ingredient1.value,
    ingredient2.value,
    ingredient3.value,
    ingredient4.value,
    ingredient5.value
  );
});
// use value to fetch api
const fetchApi = async (a, b, c, d, e) => {
  const baseURL = ` https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${a},+${b},+${c},+${d},+${e}&number=1000`;
  const response = await fetch(baseURL);
  const data = await response.json();

  const results = data.filter((n) => {
    return n.missedIngredientCount <= 2;
  });
  console.log(results);

  availableDishes(results);
};
//render results in the dom
const listOfDishes = document.querySelector(".search-results");
const availableDishes = (results) => {
  results.forEach((result) => {
    const dish = document.createElement("div");
    dish.innerHTML = `<div>
            <img src="${result.image}" alt="${result.title}">
      </div>`;
    // add a link to recipe website in each dish
    dish.addEventListener("click", () => {
      const link = document.createElement("a");
      link.textContent = "Recipe";
      // create a function that fetches the recipe website

      dish.appendChild(link);
    });

    listOfDishes.appendChild(dish);
  });
};

const websiteLink = async (id) => {
  const baseURL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=43e5c6f82762450d8b2df5e84351074e`;
  const response = await fetch(baseURL);
  const data = await response.json();

  link.href = data.sourceUrl;
};

// console.log(websiteLink(640676));

// https://api.spoonacular.com/recipes/findByIngredients

// https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2

// https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.

// https://api.spoonacular.com/recipes/641890/information?apiKey=43e5c6f82762450d8b2df5e84351074e

// https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=chicken,+bacon,+egg,+avocado+cheese&number=1000
