import styles from './home.module.css';
import RecipeCard from './RecipeCard';

const Home = () => {
	// SEARCHBAR
	// SIDEBAR
	// RECIPE CARDS
	return <div className={styles.home}>
		<RecipeCard />
		<RecipeCard />
		<RecipeCard />
		<RecipeCard />
		<RecipeCard />
		<RecipeCard />
		<RecipeCard />
	</div>;
}

export default Home;
