import styles from './header.module.css';

const Header = () => {
	return <div className={styles.headerContainer}>
		<h1 className={styles.appName} id="appname">FoodieApp</h1>
	</div>
};

export default Header;
