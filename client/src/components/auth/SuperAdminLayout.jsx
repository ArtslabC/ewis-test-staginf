import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/authcontext/AuthContext";
import { NavBarAdminPanel } from "../../views/admin";
import NotFound from "../../views/home/NotFound";

const SuperAdminLayout = () => {
  const { isAuthenticated, loading, checkUser, user } = useContext(AuthContext);

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
    return <Navigate to="/admin-login" />;
  }

  if (isAuthenticated && user.role != "admin") {
    return <NotFound />;
  }

  return (
    <>
      <NavBarAdminPanel />
      <Outlet />
    </>
  );
};

export default SuperAdminLayout;
