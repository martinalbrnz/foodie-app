import * as type from './constants';

export const getAllIngredientsPending = () => ({
  type: type.GET_ALL_INGREDIENTS_PENDING
});

export const getAllIngredientsFulfilled = (allIngredients) => ({
  type: type.GET_ALL_INGREDIENTS_FULFILLED,
  payload: allIngredients
});

export const getAllIngredientsError = (error) => ({
  type: type.GET_ALL_INGREDIENTS_ERROR,
  payload: error
}); 
