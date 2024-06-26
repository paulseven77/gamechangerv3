import {Outlet, Navigate} from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = true;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
