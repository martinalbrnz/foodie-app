import { useAtomValue } from "jotai";
import { Navigate } from "react-router-dom";
import { userAtom } from "../store/user";

export interface ProtectedRouteProps {
  roles: string[];
  children: React.ReactNode;
}

const ProtectedRoute = ({ roles, children }: ProtectedRouteProps) => {
  const user = useAtomValue(userAtom);
  if (!user || !roles.includes(user.role)) return <Navigate to="/login" />;
  else return children;
};

export default ProtectedRoute;
