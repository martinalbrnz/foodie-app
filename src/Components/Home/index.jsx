import styles from './home.module.css';
import RecipeCard from './RecipeCard';

const Home = () => {
  // SEARCHBAR
  // SIDEBAR
  // RECIPE CARDS
  return <div className={styles.home}>
    <RecipeCard favorite={true} />
    <RecipeCard favorite={true} />
    <RecipeCard favorite={true} />
    <RecipeCard favorite={false} />
    <RecipeCard favorite={true} />
    <RecipeCard favorite={false} />
    <RecipeCard favorite={true} />
    <RecipeCard favorite={true} />
    <RecipeCard favorite={true} />
  </div>;
}

export default Home;
