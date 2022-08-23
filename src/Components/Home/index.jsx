import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './home.module.css';
import RecipeCard from './RecipeCard';
import * as recipeThunks from '../../redux/recipes/thunks';
import Loader from  '../../Components/Shared/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.list);
  const isFetchingRecipes = useSelector((state) => state.recipes.isFetching);

  useEffect(() => {
    dispatch(recipeThunks.getAllRecipes());
  }, [dispatch])
  // SIDEBAR

  if (isFetchingRecipes) {
    return <Loader />;
  }
  return <div className={styles.home}>
    <label htmlFor="search">
      <input type="text" className={styles.searchBar} placeholder="Search a recipe"/>
    </label>
    <h1>HOME</h1>
    {recipes.map((recipe) => {
      return <RecipeCard favorite={true} recipe={recipe} />
    })}
    
  </div>;
}

export default Home;
