import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Edit, Eye, EyeOff, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authcontext/AuthContext";
import { Container } from "../../components/hoc";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function Users() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(user.role);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${SERVER_URL}/api/user/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ewis_sl_user")}`,
        },
      });
      const data = await response.json();
      console.log("user profile ", data);
      setCurrentUser(data);
      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await fetch(`${SERVER_URL}/api/user/users/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("ewis_sl_user")}`,
          },
        });

        if (response.ok) {
          fetchUser();
          toast.success("User deleted successfully!");
        } else {
          const data = await response.json();
          toast.error(data.message || "Failed to delete user");
        }
      } catch (error) {
        console.error("Error deleting user:", error);
        toast.error("Server error. Please try again.");
      }
    }
  };

  const handleSave = async () => {
    try {
      const updatedUser = {
        ...setCurrentUser,
        oldPassword,
        newPassword,
      };

      const response = await fetch(
        `${SERVER_URL}/api/user/users/${editingUser._id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedUser),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setEditingUser(null);
        fetchUser();
        toast.success("User updated successfully!");
      } else {
        toast.error(data.message || "Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Server error. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...editingUser, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

  return (
    <>
      <div className="bg-white">
        <Container classes="mb-10">
          <h1 className="font-Poppins text-lg font-semibold my-5">
            Hello {currentUser?.username}
          </h1>
          <div className="flex flex-col gap-5 font-Rubik text-base text-blackFooter w-96 bg-gray-50 w-full rounded-xl overflow-hidden p-5">
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-2 font-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={currentUser?.username}
                onChange={handleChange}
                className="px-5 py-3 rounded-xl font-Rubik ring-1 ring-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="fullname" className="mb-2 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={currentUser?.fullname}
                onChange={handleChange}
                className="px-5 py-3 rounded-xl font-Rubik ring-1 ring-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={currentUser?.email}
                onChange={handleChange}
                className="px-5 py-3 rounded-xl font-Rubik ring-1 ring-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="oldPassword" className="mb-2 font-semibold">
                Old Password
              </label>
              <div className="relative">
                <input
                  type={oldPasswordVisible ? "text" : "password"}
                  id="oldPassword"
                  name="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="px-5 py-3 rounded-xl font-Rubik w-full ring-1 ring-black"
                />
                <button
                  type="button"
                  onClick={toggleOldPasswordVisibility}
                  className="absolute right-3 top-3"
                >
                  {oldPasswordVisible ? (
                    <EyeOff className="h-6 w-6" />
                  ) : (
                    <Eye className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="newPassword" className="mb-2 font-semibold">
                New Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="px-5 py-3 rounded-xl font-Rubik w-full ring-1 ring-black"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3"
                >
                  {passwordVisible ? (
                    <EyeOff className="h-6 w-6" />
                  ) : (
                    <Eye className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-row gap-5 mt-3">
              <button
                onClick={handleSave}
                className="px-5 py-3 bg-primary text-white rounded-xl"
              >
                Save
              </button>
              <button
                onClick={fetchUser}
                className=" text-red-800 font-bold underline rounded-xl"
              >
                Cancel
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Users;
