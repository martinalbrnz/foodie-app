import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFound from "../views/404";
import Home from "../views/Home";
import LandingView from "../views/Landing";
import LoginView from "../views/login";
import RegisterView from "../views/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingView />,
  },
  {
    path: "app",
    element: (
      <ProtectedRoute roles={["user", "admin"]}>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "login",
    element: <LoginView />,
  },
  {
    path: "register",
    element: <RegisterView />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
