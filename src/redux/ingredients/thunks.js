import * as ingredientAction from './actions';

export const getAllIngredients = () => (dispatch) => {
  dispatch(ingredientAction.getAllIngredientsPending());
  fetch(`${process.env.REACT_APP_API_URL}/ingredients`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (!json.error) {
        dispatch(ingredientAction.getAllIngredientsFulfilled(json.data));
      }
    })
    .catch((error) => {
      dispatch(ingredientAction.getAllIngredientsError(error));
    })
}