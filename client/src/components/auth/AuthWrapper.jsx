import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/authcontext/AuthContext";
import AdminLoadingScreen from "../common/AdminLoadingScreen";

const AuthWrapper = (Component) => {
  return (props) => {
    const { isAuthenticated, loading, checkUser } = useContext(AuthContext);

    useEffect(() => {
      checkUser();
    }, []);

    if (loading) {
      return <AdminLoadingScreen />;
    }

    if (!isAuthenticated) {
      return <Navigate to="/admin-log" />;
    }

    return <Component {...props} />;
  };
};

export default AuthWrapper;
