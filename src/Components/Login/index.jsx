import styles from './login.module.css';

const Login = () => {
	const handleLogin = (e) => {
		e.preventDefault();
		console.log('Login!!!')
	}
	return (
		<div className={styles.loginScreen}>
			<div className={styles.sideImage}></div>
			<div className={styles.formContainer}>
				<div className={styles.logo}></div>
				<h2 className={styles.welcome}>Welcome</h2>
				<form className={styles.form}>
					<label htmlFor="email">
						<input type="text" placeholder="Email"/>
					</label>
					<label htmlFor="password">
						<input type="text" placeholder="Password"/>
					</label>
					<button className={styles.loginButton} onClick={handleLogin}>LOGIN</button>
				</form>
			</div>
		</div>
	)
};

export default Login;
