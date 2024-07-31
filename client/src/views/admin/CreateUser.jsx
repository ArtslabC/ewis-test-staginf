import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/authcontext/AuthContext";
import Container from "./../../components/hoc/Container";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FiDelete } from "react-icons/fi";
import { FaPause } from "react-icons/fa";
import { Md11Mp, MdDelete, MdPlayArrow } from "react-icons/md";
import NotFound from "./../home/NotFound";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function CreateUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [users, setUsers] = useState([]);
  const [isUsersFetching, setIsUsersFetching] = useState(true);
  const [isUsersFetchingError, setIsUsersFetchingError] = useState(null);

  const [userActionTaking, setUserActionTaking] = useState(false);
  const [userRoleUpdating, setUserRoleUpdating] = useState(false);

  const { user } = useContext(AuthContext);

  const getallusers = async () => {
    try {
      setIsUsersFetching(true);
      setIsUsersFetchingError(null);
      const token = localStorage.getItem("ewis_sl_user"); // Retrieve token from localStorage
      if (!token) {
        return;
      }

      const response = await fetch(`${SERVER_URL}/api/user/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setIsUsersFetchingError(null);
        setUsers(data);
      } else {
        toast.error("Error getting users");
        setIsUsersFetchingError(true);
      }
    } catch (error) {
      toast.error("Error getting users");
      setIsUsersFetchingError(true);
    } finally {
      setIsUsersFetching(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrorMessage("");
    if (username == "" || password == "" || fullname == "" || email == "") {
      setErrorMessage(`Error: Fill all the fields`);
      return;
    }

    const user = {
      username,
      password,
      fullname,
      email,
      role,
    };

    try {
      const token = localStorage.getItem("ewis_sl_user"); // Retrieve token from localStorage
      if (!token) {
        console.error("No token found, user might not be authenticated");
        return;
      }

      const response = await fetch(`${SERVER_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`User ${data.username} created successfully!`);
        setUsername("");
        setPassword("");
        setFullname("");
        setEmail("");
        setRole("user");
      } else {
        const errorData = await response.json();
        setErrorMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setErrorMessage(`Error: ${error.message}`);
    }
  };

  const activateUser = async (id) => {
    if (userActionTaking) {
      return;
    }
    try {
      const token = localStorage.getItem("ewis_sl_user"); // Retrieve token from localStorage
      if (!token) {
        console.error("No token found, user might not be authenticated");
        return;
      }

      const response = await fetch(
        `${SERVER_URL}/api/user/users/${id}/activate`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        toast.success("Successfully Activated the user");
        getallusers();

        setUserActionTaking(false);
      } else {
        toast.error("Error Activating the user");
        setUserActionTaking(false);
      }
    } catch (error) {
      setUserActionTaking(false);
      toast.error("Error Activating the user");
    } finally {
      setUserActionTaking(false);
    }
  };

  const deactivateUser = async (id) => {
    if (userActionTaking) {
      return;
    }
    try {
      const token = localStorage.getItem("ewis_sl_user"); // Retrieve token from localStorage
      if (!token) {
        console.error("No token found, user might not be authenticated");
        return;
      }

      const response = await fetch(
        `${SERVER_URL}/api/user/users/${id}/deactivate`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        toast.success("Successfully Deactivated the user");
        getallusers();
        setUserActionTaking(false);
      } else {
        toast.error("Error Deactivating the user");
        setUserActionTaking(false);
      }
    } catch (error) {
      setUserActionTaking(false);
      toast.error("Error Deactivating the user");
    } finally {
      setUserActionTaking(false);
    }
  };

  const handleUserRole = async (role, id) => {
    if (userRoleUpdating) {
      return;
    }

    try {
      const updatedRole = {
        role,
      };

      const response = await fetch(`${SERVER_URL}/api/user/update-role/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedRole),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("ewis_sl_user")}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        getallusers();
        toast.success("User role updated successfully!");
      } else {
        toast.error("Failed to update user");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error. Please try again.");
    }
  };
  useEffect(() => {
    getallusers();
  }, []);

  // if (user.role != "admin") {
  //   return <NotFound />;
  // }

  return (
    <Container>
      <div className="flex flex-col min-h-screen items-start justify-center p-10 font-Poppins py-10 w-full ">
        <h1 className="text-[#000] font-semibold text-lg uppercase mb-5">
          User List
        </h1>

        <div className="bg-gray-50 p-5 w-full min-w-[768px]  rounded-md">
          <div className="w-full pt-5">
            <div className="border flex  items-center text-xs ">
              <div className="border-r p-2 w-[15%] text-[#000]">Username</div>
              <div className="border-r p-2 w-[35%] text-[#000]">Email</div>
              <div className=" w-[10%] border-r p-2 text-[#000]">Role</div>
              <div className=" w-[20%] border-r p-2 text-[#000]">Action</div>
              <div className=" w-[20%] p-2 text-[#000]">Manage Role</div>
            </div>
            {users.map((user, i) => (
              <div
                key={i}
                className={`border-b border-l border-r flex  items-center text-sm text-black 
                  ${user.status == "active" ? "bg-green-100" : "bg-red-100"}
                  `}
              >
                <div className="border-r p-2 w-[15%] text-xs  ">
                  {user?.username}
                </div>
                <div className="border-r p-2 w-[35%] text-xs  ">
                  {user?.email}
                </div>
                <div className=" w-[10%] border-r p-2 text-xs ">
                  {user?.role}
                </div>
                <div className=" w-[20%] border-r p-2 grid grid-cols-2 gap-1">
                  {user?.status == "active" ? (
                    <button
                      onClick={() => deactivateUser(user?._id)}
                      className="flex items-center justify-center bg-green-400 py-1 text-white rounded-md"
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      onClick={() => activateUser(user?._id)}
                      className="flex items-center justify-center bg-red-400 py-1 text-white rounded-md"
                    >
                      Activate
                    </button>
                  )}
                </div>
                <div className="w-[20%] px-2">
                  <select
                    className="w-full py-1 border-gray-200 border text-sm outline-none"
                    name="role"
                    onChange={(e) => handleUserRole(e.target.value, user?._id)}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-[#000] font-semibold text-lg uppercase mb-5 mt-10">
          Add new user
        </h1>

        <div className=" p-5  bg-gray-50 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full ">
            <input
              type="text"
              className=" mt-3 p-2 outline-primary w-full text-sm"
              placeholder="full name or name"
              value={fullname}
              onChange={(ev) => setFullname(ev.target.value)}
            />
            <input
              type="text"
              className=" p-2 outline-primary w-full text-sm"
              placeholder="username"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
            <input
              type="email"
              className=" p-2 outline-primary w-full text-sm"
              placeholder="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
              type="password"
              className=" p-2 outline-primary w-full text-sm"
              placeholder="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            {user.role && user.role == "admin" && (
              <select
                className="px-2 py-3 border-gray-200 border text-xs"
                name="role"
                onChange={(e) => setRole(e.target.value)}
              >
                <option className="text-xs" value="user">
                  User
                </option>
                <option className="text-xs" value="admin">
                  Admin
                </option>
              </select>
            )}
            <button className="mb-3 w-fit bg-primary px-5 py-3 font-semibold text-white text-sm">
              Create User
            </button>
          </form>
          {message && (
            <p className="text-center w-full mt-4 px-3 py-3 border  border-green-200 bg-green-50 text-green-400">
              {message}
            </p>
          )}
          {errorMessage && (
            <p className="text-center w-full mt-4 px-3 py-3 border  border-red-200 bg-red-50 text-red-400">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}

export default CreateUser;

// {user && user.role && user.role == "admin" && (
//   <>
//     <div className="flex flex-col">
//       <label htmlFor="role" className="mb-2 font-semibold">
//         Role
//       </label>
//       <select
//         name="role"
//         className="px-3 py-5 border border-gray-800 rounded-3xl"
//         onClick={(e) => setRole(e.target.value)}
//         id=""
//       >
//         <option className="capitalize" value={currentUser?.role}>
//           {currentUser?.role}
//         </option>

//         <option className="capitalize" value="user">
//           User
//         </option>
//         <option className="capitalize" value="admin">
//           Admin
//         </option>
//       </select>
//     </div>
//     <div className="flex flex-row gap-5 mt-3">
//       <button
//         onClick={() => handleUserRole(currentUser._id)}
//         className="px-5 py-3 bg-primary text-white rounded-xl"
//       >
//         Update Role
//       </button>
//       <button
//         onClick={() => setEditingUser(null)}
//         className="px-5 py-3 bg-red text-black rounded-xl"
//       >
//         Cancel
//       </button>
//     </div>
//   </>
// )}
