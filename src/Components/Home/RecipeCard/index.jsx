import styles from './recipeCard.module.css';

const RecipeCard = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h2>Mozzarella pizza</h2>
        <i className="material-icons">favorite{props.favorite ? '' : '_border'}</i>
      </div>
      <div className={styles.estimatedTime}>
        <i className="material-icons">
          schedule
        </i>
        <p>45m</p>
      </div>
      <div className={styles.recipeImage}></div>
      <div className={styles.cardFooter}>
        <div className={styles.infoContainer}>
          <p>6 ingredients</p>
          <p>6 utensils</p>
          <p>Vegetarian</p>
        </div>
        <p className={styles.tryButton}>TRY IT</p>
      </div>
    </div>
  );
}

export default RecipeCard;
