import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const hasLocalToken = !!localStorage.getItem("token");

  return hasLocalToken ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;
