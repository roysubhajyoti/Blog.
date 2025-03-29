import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-midnight">
      <Navbar />
      <hr className="bg-blue-500" />
      <div className="flex-grow mt-16 ">
        <Outlet />
      </div>
      <footer className="dark:text-midnightLite dark:bg-slate-700 bg-slate-100 flex justify-center items-center py-2 mt-auto h-12">
        ©️All rights reserved, made by SJR
      </footer>
    </div>
  );
};
