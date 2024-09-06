import { atom } from "recoil";

// Get theme from localStorage, or default to 'light'
const getTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "light"; // Return 'light' if no theme is found
};

export const ThemeAtom = atom({
  key: "theme",
  default: getTheme(), // Use the string directly as the default value
  effects_UNSTABLE: [
    ({ onSet }) => {
      // Save theme to localStorage whenever it changes
      onSet((newTheme) => {
        localStorage.setItem("theme", newTheme);
      });
    },
  ],
});
