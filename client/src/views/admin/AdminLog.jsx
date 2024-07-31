import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "../../forms/login-form";
import AuthContext from "../../context/authcontext/AuthContext";
import AdminLoadingScreen from "../../components/common/AdminLoadingScreen";
import { Helmet } from "react-helmet";

function AdminLog() {
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

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="login" content="login to admin dashboard" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center p-10 bg-blue-50/30 border-blue-200 font-Poppins">
        <ToastContainer />
        <LoginForm />
      </div>
    </>
  );
}

export default AdminLog;
