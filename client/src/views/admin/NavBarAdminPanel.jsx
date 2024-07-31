import { Menu, X } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/authcontext/AuthContext";
import { Container } from "../../components/hoc";
import { IoIosLogOut } from "react-icons/io";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function NavBarAdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (
      !document.getElementById("sidebar").contains(e.target) &&
      !document.getElementById("open-sidebar").contains(e.target)
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/auth/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ewis_sl_user")}`,
        },
      });
      if (response.ok) {
        localStorage.removeItem("ewis_sl_user");
        navigate("/");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <div
        className={`z-[100000] bg-primary text-white w-1/4 h-screen fixed top-0 left-0 overflow-y-auto transition-transform transform ease-in-out duration-300 p-5 ${
          sidebarOpen ? "" : "-translate-x-full z-50"
        }`}
        id="sidebar"
      >
        <div className="">
          <div className=" pt-5 flex flex-row items-center justify-center">
            <div className="w-1/5">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716163200&semt=sph"
                alt=""
                className="w-10 h-10 rounded-full bg-white ring-2 ring-white"
              />
            </div>
            <div className="w-4/5 flex flex-col items-start justify-start pl-2">
              <h1 className="font-semibold font-Poppins">{user.username}</h1>
              <h1 className="text-xs font-semibold">admin</h1>
            </div>
          </div>

          <div className="font-Poppins text-xl py-10 flex flex-col">
            <a
              href="/show-user"
              className=" py-4 rounded-md text-sm hover:bg-green-700/30 cursor-pointer"
            >
              <span className="icon mx-4">👤</span>Profile
            </a>
            <a
              href="/dashboard"
              className=" py-4 rounded-md text-sm hover:bg-green-700/30 cursor-pointer"
            >
              <span className="icon mx-4">📊</span>Dashboard
            </a>
            <a
              href="/blog-edit-page"
              className=" py-4 rounded-md text-sm hover:bg-green-700/30 cursor-pointer"
            >
              <span className="icon mx-4">📝</span>Blogs
            </a>
            <a
              href="/show-news"
              className=" py-4 rounded-md text-sm hover:bg-green-700/30 cursor-pointer"
            >
              <span className="icon mx-4">📰</span>News
            </a>
            <a
              href="/show-jobs"
              className=" py-4 rounded-md text-sm hover:bg-green-700/30 cursor-pointer"
            >
              <span className="icon mx-4">💼</span>Jobs
            </a>

            <a
              href="/media-manager"
              className=" py-4 rounded-md text-sm hover:bg-green-700/30 cursor-pointer"
            >
              <span className="icon mx-4">🎬</span>Media
            </a>
            <button
              className=" text-start w-full py-4 rounded-md text-sm bg-green-700/50 mt-2 hover:bg-green-700/30 cursor-pointer flex items-center gap-2 pl-4"
              onClick={handleLogout}
            >
              <span>
                <IoIosLogOut className="text-2xl" />
              </span>
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white shadow">
        <Container>
          <div className="flex justify-between items-center py-4">
            <a
              href="/dashboard"
              className="text-2xl font-semibold font-Poppins"
            >
              Ewis Dashboard
            </a>
            <button
              className="text-gray-500 hover:text-gray-600 ring-0 rounded-md p-1 ring-blackFooter"
              id="open-sidebar"
              onClick={toggleSidebar}
            >
              {sidebarOpen ? <X className="" /> : <Menu className="" />}
            </button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default NavBarAdminPanel;
