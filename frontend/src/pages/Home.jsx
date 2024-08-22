import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <hr className="bg-blue-500 " />
      <div className="flex-grow ">
        <Outlet />
      </div>

      {/* <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        ©️All rights reserved, made by SJR with Love 💌
      </footer> */}
    </div>
  );
};
