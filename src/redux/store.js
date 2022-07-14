import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import ingredientsReducer from './ingredients/reducers';
import recipesReducer from './recipes/reducers';


const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  recipes: recipesReducer
});

const store = configureStore({
  reducer: rootReducer,
  enhacer: composeWithDevTools(applyMiddleware(thunk))
});

export default store;