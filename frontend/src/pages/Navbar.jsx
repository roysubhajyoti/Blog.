import { Link, NavLink } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { responseAtom } from "../atom/atoms";
import { ThemeAtom } from "../atom/themeAtom";

export const Navbar = () => {
  const [theme, setTheme] = useRecoilState(ThemeAtom);
  const responseAtomVal = useRecoilValue(responseAtom);
  const { isLogged, isLoggedOut, firstName } = responseAtomVal;
  console.log({ isLogged, isLoggedOut, firstName });

  const handleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    console.log(theme + "--->theme is ");
  };

  return (
    <div className="h-16 dark:bg-transparent/50 dark:drop-shadow-2xl dark:backdrop-blur-md bg-transparent/20 backdrop-blur-md shadow-xl font-semibold text-lg list-none flex  justify-between items-center text-white  gap-6 fixed top-0 left-0 right-0 z-50">
      <div>
        <Link to="/" className=" absolute top-1 left-7 text-3xl">
          <svg
            className="w-32 h-28"
            viewBox="0 0 100 150"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth="2"
          >
            <text
              x="-20"
              y="50"
              fontSize="40"
              fontFamily="sans-serif"
              className="animate-draw text-green-800 dark:text-white "
              stroke="currentColor"
              strokeDasharray="100"
              strokeDashoffset="0"
            >
              Blog.
            </text>
          </svg>
        </Link>
      </div>
      <div className="flex justify-end dark:text-midnightLink items-center w-2/3 gap-10 text-black pr-20">
        {isLogged && (
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            <li>Profile</li>
          </NavLink>
        )}

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
          <h2 className="h-9 w-9 rounded-full flex justify-center items-center font-serif text-lg bg-green-800 text-white">
            {firstName[0].toUpperCase()}
          </h2>
        )}
        <button onClick={handleTheme}>
          {theme === "dark" ? (
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
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
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
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
