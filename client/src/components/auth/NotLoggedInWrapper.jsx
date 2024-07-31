import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/authcontext/AuthContext";
import AdminLoadingScreen from "../common/AdminLoadingScreen";

const NotLoggedInWrapper = (Component) => {
  return (props) => {
    const { isAuthenticated, loading, checkUser } = useContext(AuthContext);

    useEffect(() => {
      checkUser();
    }, []);

    if (loading) {
      return <AdminLoadingScreen />;
    }

    if (isAuthenticated) {
      return <Navigate to="/dashboard" />;
    }

    return <Component {...props} />;
  };
};

export default NotLoggedInWrapper;
