import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/authcontext/AuthContext";

const AuthWrapper = (Component) => {
  return (props) => {
    const { isAuthenticated, loading, checkUser } = useContext(AuthContext);

    useEffect(() => {
      checkUser();
    }, []);

    if (loading) {
      return (
        <div className="w-screen h-screen flex flex-col items-center justify-center font-Poppins text-2xl bg-primary text-white">
          <span>Loading...</span>
        </div>
      );
    }

    if (!isAuthenticated) {
      return <Navigate to="/admin-log" />;
    }

    return <Component {...props} />;
  };
};

export default AuthWrapper;
