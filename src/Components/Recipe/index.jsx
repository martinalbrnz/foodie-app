/* eslint-disable react-hooks/exhaustive-deps */
import styles from './recipe.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as recipeThunk from 'redux/recipes/thunks';
import { useEffect, useState } from 'react';
import EstimatedTime from 'Components/Shared/EstimatedTime';

const Recipe = () => {
	const [servings,  setServings] = useState(1);
	const dispatch = useDispatch();
	const id = "62ca80e92786d92e825c72d6";
	useEffect(() => {
		dispatch(recipeThunk.getAllRecipes())
	}, [])
	const recipe = useSelector((state) => state.recipes.list).find((item) => item._id === id);
	
	const addServing = () => {
		setServings(servings + 1);
	}

	const minusServing = () => {
		if (servings > 1) {
			setServings(servings - 1)
		}
	}

	return <div className={styles.recipePage}>
		<label htmlFor="search">
      <input type="text" className={styles.searchBar} placeholder="Search a recipe"/>
    </label>
		<div className={styles.imgContainer}></div>
		<h2>{recipe.name}</h2>
		<EstimatedTime estimatedTime={recipe.estimatedTime} />
		<ul>
			{recipe.ingredients.map((ingredient) => {
				return <li>{ingredient.amount * servings}{ingredient.unit} {ingredient.ingredient.name}</li>
			})}
		</ul>
		<ul>
			{recipe.utensils.map((utensil) => {
				return <div>
					<p></p>
				</div>
			})}
		</ul>
		<ol>
			{recipe.instructions.map((inst) => {
				return <li>{inst}</li>
			})}
		</ol>
		<div>
			<i className="material-icons" onClick={minusServing}>remove</i>
			<p>Servings: {servings}</p>
			<i className="material-icons" onClick={addServing}>add</i>
		</div>
	</div>
};

export default Recipe;
