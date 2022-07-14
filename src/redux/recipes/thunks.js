import * as recipeAction from './actions';

export const getAllRecipes = () => (dispatch) => {
  dispatch(recipeAction.getAllRecipesPending());
  fetch(`${process.env.REACT_APP_API_URL}/recipes`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      if (!json.error) {
        dispatch(recipeAction.getAllRecipesFulfilled(json.data));
      }
    })
    .catch((error) => {
      dispatch(recipeAction.getAllRecipesError(error));
    });
};
