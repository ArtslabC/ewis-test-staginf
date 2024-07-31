import React from "react";
import { ImSpinner2 } from "react-icons/im";

const AdminLoadingScreen = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center  bg-white">
      <ImSpinner2 className="text-2xl text-[#000] animate-spin" />
    </div>
  );
};

export default AdminLoadingScreen;
