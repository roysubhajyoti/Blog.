import { Link, NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { responseAtom } from "../atom/atoms";

export const Navbar = () => {
  const responseAtomVal = useRecoilValue(responseAtom);
  const { isLogged, isLoggedOut, firstName } = responseAtomVal;
  console.log({ isLogged, isLoggedOut, firstName });

  return (
    <div className="h-16 bg-transparent/10 shadow-xl font-semibold text-lg list-none flex  justify-between items-center text-white  gap-6 relative ">
      <div>
        <Link to="/" className="text-green-800 absolute top-3 left-8 text-3xl">
          <li>Blog.</li>
        </Link>
      </div>
      <div className="flex justify-end  items-center w-2/3 gap-10 text-black pr-20">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          <li>Dashboard</li>
        </NavLink>

        {isLoggedOut && (
          <NavLink
            to="/signin"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            <li>Signin</li>
          </NavLink>
        )}
        {isLoggedOut && (
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            <li>Signup</li>
          </NavLink>
        )}
        {isLogged && (
          <NavLink
            to="/createpost"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            <li>Create New Post</li>
          </NavLink>
        )}
        {isLogged && (
          <NavLink
            to="/logout"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            <li>logout</li>
          </NavLink>
        )}
        {isLogged && (
          <h2 className="h-9 w-9 rounded-full flex justify-center items-center font-serif text-lg bg-green-800 ">
            {firstName[0].toUpperCase()}
          </h2>
        )}
      </div>
    </div>
  );
};
