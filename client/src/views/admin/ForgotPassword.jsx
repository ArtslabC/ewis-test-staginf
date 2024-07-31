import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotLoggedInWrapper from "../../components/auth/NotLoggedInWrapper";
import { Helmet } from "react-helmet";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [suces, setsuces] = useState(false);
  const [reqSubmitting, setReqSubmitting] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      setReqSubmitting(true);
      const response = await fetch(`${SERVER_URL}/api/user/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        toast.success(data.message);
        setsuces(true);
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message}`);
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      toast.error(`Error: ${error.message}`);
    } finally {
      setReqSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
        <meta name="Forgot Password" content="Reset Your Password" />
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
              <h1 className="text- text-[#000] text-xl">Forgot Password</h1>
            </div>
            <div className="flex w-full flex-col gap-5 items-center justify-center">
              <form onSubmit={handleForgotPassword}>
                <br />
                <input
                  type="email"
                  className="w-full rounded-2xl bg-white mb-5 outline-blue-400 px-5 py-3 text-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  required
                />

                <button
                  type="submit"
                  disabled={reqSubmitting}
                  className={`mb-3 w-full rounded-2xl text-sm  px-5 py-3 text-white bg-primary
                     ${reqSubmitting ? "bg-primary/50" : "bg-primary"}
                    `}
                >
                  {reqSubmitting ? "Loading..." : "Send Reset Link"}
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

export default NotLoggedInWrapper(ForgotPassword);
