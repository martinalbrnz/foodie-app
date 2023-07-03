import { Navigate } from "react-router-dom";

export interface ProtectedRouteProps {
  roles: string[];
  children: React.ReactNode;
}

const ProtectedRoute = ({ roles, children }: ProtectedRouteProps) => {
  const role = localStorage.getItem("role") ?? "guest";
  if (roles.includes(role)) return children;
  else return <Navigate to="/login" />;
};

export default ProtectedRoute;
