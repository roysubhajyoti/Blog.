import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { ThemeAtom } from "../src/atom/themeAtom";

export const ThemeProvider = ({ children }) => {
  const theme = useRecoilValue(ThemeAtom);
  console.log(theme + "in provde");

  useEffect(() => {
    console.log("Theme has changed:", theme); // Log the theme value for debugging

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      console.log("Dark mode class added");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Dark mode class removed");
    }
  }, [theme]);

  return <>{children}</>;
};
