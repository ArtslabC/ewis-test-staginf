import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import AuthContext from "../../context/authcontext/AuthContext";
import NotFound from "../home/NotFound";
import AdminLoadingScreen from "../../components/common/AdminLoadingScreen";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function ResetPassword() {
  const { isAuthenticated, loading, checkUser } = useContext(AuthContext);
  const [tokenValidated, setTokenValidated] = useState(false);
  const [tokenValidating, setTokenValidating] = useState(true);

  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [suces, setsuces] = useState(false);

  const navigate = useNavigate();

  const validateToken = async () => {
    setTokenValidating(true);
    try {
      const response = await fetch(
        `${SERVER_URL}/api/user/validate-token/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setTokenValidated(true);
      } else {
        setTokenValidated(false);
      }
    } catch (error) {
      console.log(error);
      setTokenValidated(false);
    } finally {
      setTokenValidating(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }
    try {
      const response = await fetch(
        `${SERVER_URL}/api/user/reset-password/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        toast.success(data.message);
        setsuces(true);
        setPassword("");
        setConfirmPassword("");
        navigate("/admin-login");
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message}`);
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      toast.error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    validateToken();
  }, []);

  if (loading) {
    return <AdminLoadingScreen />;
  }

  if (isAuthenticated || !tokenValidated) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>Reset Password</title>
        <meta name="Reset Password" content="Reset Your Password" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center p-10 bg-blue-50/30 border-blue-200 border-2 font-Poppins">
        <ToastContainer />
        <div className="max-w-md rounded-2xl ring-1 md:shadow-xl bg-blue-50/30 border-blue-200 border-2">
          <div className="flex flex-col justify-center items-center p-5 gap-5">
            <div className="flex  items-center gap-3">
              <div className="bg-blue-200 rounded-full  w-10 h-10 p-2">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/forgot-password-8196882-6559358.png"
                  alt="reset password"
                />
              </div>
              <h1 className="text- text-[#000] text-xl">Reset Password</h1>
            </div>
            <div className="flex items-center justify-center">
              <form onSubmit={handleResetPassword}>
                <br />
                <input
                  type="password"
                  className="w-full rounded-2xl bg-white mb-5 outline-blue-400 px-5 py-3 text-sm"
                  placeholder="New Password"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  required
                />
                <input
                  type="password"
                  className="w-full rounded-2xl bg-white mb-5 outline-blue-400 px-5 py-3 text-sm"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(ev) => setConfirmPassword(ev.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="mb-3 w-full rounded-2xl text-sm  px-5 py-3 text-white bg-primary"
                >
                  Reset Password
                </button>
                <a
                  className="text-xs text-center text-text-1  font-semibold underline"
                  href="/admin-login"
                >
                  Login
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
