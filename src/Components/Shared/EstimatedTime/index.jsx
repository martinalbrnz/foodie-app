import styles from "./estimated.module.css";

const EstimatedTime = (props) => {
  return (
    <div className={styles.estimatedTime}>
      <i className="material-icons">schedule</i>
      <p>{props.estimatedTime}m</p>
    </div>
  );
};

export default EstimatedTime;
