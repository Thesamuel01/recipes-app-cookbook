const MEALS_TOKEN = 'mealsToken';
const COCKTAILS_TOKEN = 'cocktailsToken';
const DONE_RECIPES_TOKEN = 'doneRecipes';
const IN_PROGRESS_RECIPE_TOKEN = 'inProgressRecipes';
const FAVORITE_RECIPES_TOKEN = 'favoriteRecipes';

if (!localStorage.getItem(DONE_RECIPES_TOKEN)) {
  localStorage.setItem(DONE_RECIPES_TOKEN, JSON.stringify([]));
}

if (!localStorage.getItem(IN_PROGRESS_RECIPE_TOKEN)) {
  localStorage.setItem(
    IN_PROGRESS_RECIPE_TOKEN,
    JSON.stringify({ cocktails: {}, meals: {} }),
  );
}

if (!localStorage.getItem(FAVORITE_RECIPES_TOKEN)) {
  localStorage.setItem(
    FAVORITE_RECIPES_TOKEN,
    JSON.stringify([]),
  );
}

const readDoneRecipes = () => JSON.parse(localStorage.getItem(DONE_RECIPES_TOKEN));
const saveDoneRecipes = (recipes) => localStorage.setItem(DONE_RECIPES_TOKEN, recipes);
const readInProgressRecipes = () => {
  const data = localStorage.getItem(IN_PROGRESS_RECIPE_TOKEN);

  return JSON.parse(data);
};
const saveInProgressRecipes = (recipes) => {
  localStorage.setItem(IN_PROGRESS_RECIPE_TOKEN, JSON.stringify(recipes));
};
const readFavoriteRecipes = () => {
  const data = localStorage.getItem(FAVORITE_RECIPES_TOKEN);

  return JSON.parse(data);
};
const saveFavoriteRecipes = (recipes) => {
  localStorage.setItem(FAVORITE_RECIPES_TOKEN, JSON.stringify(recipes));
};

export const updateFavoriteRecipes = (recipe) => {
  const favoriteRecipes = readFavoriteRecipes();
  const hasRecipe = favoriteRecipes.some(({ id }) => id === recipe.id);

  if (hasRecipe) {
    const favoritesWithoutRecipe = favoriteRecipes.filter(({ id }) => id !== recipe.id);

    saveFavoriteRecipes([...favoritesWithoutRecipe]);
  } else {
    saveFavoriteRecipes([...favoriteRecipes, { ...recipe }]);
  }
};

export const getFavoriteRecipes = () => readFavoriteRecipes();

export const addRecipeInProgress = (recipe, group) => {
  const recipesInProgress = readInProgressRecipes();
  const [recipeId] = Object.keys(recipe);
  const hasRecipeInProgress = Object
    .keys(recipesInProgress)
    .some((id) => id === recipeId);

  if (!hasRecipeInProgress) {
    const recipes = {
      ...recipesInProgress,
      [group]: { ...recipesInProgress[group], ...recipe },
    };

    saveInProgressRecipes(recipes);
  }
};

export const updateIngredients = (id, name, group) => {
  const recipesInProgress = readInProgressRecipes();
  const { [group]: { [id]: recipe } } = recipesInProgress;
  const hasIngredient = recipe.some((ingredientName) => ingredientName === name);
  let ingredientsUpdated = [];

  if (!hasIngredient) ingredientsUpdated = [...recipe, name];
  else ingredientsUpdated = recipe.filter((ingredientName) => ingredientName !== name);

  saveInProgressRecipes({
    ...recipesInProgress,
    [group]: { ...recipesInProgress[group], [id]: [...ingredientsUpdated] },
  });
};

export const getInProgressRecipes = () => readInProgressRecipes();

export const updateRecipesDone = (recipe) => {
  const recipesDone = readDoneRecipes();

  saveDoneRecipes([...recipesDone, recipe]);
};

export const getRecipesDone = () => readDoneRecipes();

const saveTokenMeals = () => {
  localStorage.setItem(MEALS_TOKEN, '1');
  localStorage.setItem(COCKTAILS_TOKEN, '1');
};

export default saveTokenMeals;
