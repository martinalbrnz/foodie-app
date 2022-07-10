import styles from './recipeCard.module.css';

const RecipeCard = () => {
	return (
		<div className={styles.cardContainer}>
			<h2>Mozzarella pizza</h2>
			<div className={styles.estimatedTime}>
				<span className="material-symbols-outlined">
					schedule
				</span>
				<p>45m</p>
			</div>
			<span class="material-symbols-outlined">
				favorite
			</span>
			<div className={styles.recipeImage}>IMAGE</div>
			<p>6 ingredients</p>
			<p>6 utensils</p>
			<p>Vegetarian</p>
			<a href='#'>TRY IT</a>
		</div>
	);
}

export default RecipeCard;
