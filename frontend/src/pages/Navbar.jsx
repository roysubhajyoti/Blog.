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
            <li className="flex gap-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </span>{" "}
              Write
            </li>
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
