import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
  const jwt_token = localStorage.getItem("jwt_token");
  if (jwt_token === null || jwt_token === undefined) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
