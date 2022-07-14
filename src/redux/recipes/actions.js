import * as type from './constants';

export const getAllRecipesPending = () => ({
  type: type.GET_ALL_RECIPES_PENDING 
});

export const getAllRecipesFulfilled = (allRecipes) => ({
  type: type.GET_ALL_RECIPES_FULFILLED,
  payload: allRecipes
});

export const getAllRecipesError = (error) => ({
  type: type.GET_ALL_RECIPES_ERROR,
  payload: error
});
