import styles from './recipeCard.module.css';
import EstimatedTime from 'Components/Shared/EstimatedTime';

const RecipeCard = (props) => {
  const { name, ingredients, utensils, vegetarian, estimatedTime } = props.recipe;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h2>{name}</h2>
        <i className="material-icons">favorite{props.favorite ? '' : '_border'}</i>
      </div>
      <EstimatedTime estimatedTime={estimatedTime} />
      <div className={styles.recipeImage}></div>
      <div className={styles.cardFooter}>
        <div className={styles.infoContainer}>
          <p>{ingredients.length} ingredients</p>
          <p>{utensils.length} utensils</p>
          <p>{vegetarian ? 'Vegetarian' : 'Not vegetarian'}</p>
        </div>
        <p className={styles.tryButton}>TRY IT</p>
      </div>
    </div>
  );
}

export default RecipeCard;
