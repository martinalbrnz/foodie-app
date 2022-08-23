import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
// import PrivateRoute from './PrivateRoute';

import Header from "./Header";
import Footer from "./Footer";
const Login = lazy(() => import ('../../Components/Login'));
const Home = lazy(() => import ('../../Components/Home'));
const Recipe = lazy(() => import ('../../Components/Recipe'));

const Layout = ({ children }) => {
	return <>
		<Router>
			<Header />
			<Suspense fallback={<div>Cargando</div>}>
				<Routes>
					{/* <Route path="/" element={<App />} /> */}
					<Route index element={<Home />} />
					<Route path="recipe" element={<Recipe />} />
					<Route path="login" element={<Login />} />
				</Routes>
			</Suspense>
			<Footer />
		</Router>
	</>;
};

export default Layout;
