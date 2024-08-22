import { atom } from "recoil";

// Function to get the initial state from localStorage
const getInitialState = () => {
  const savedState = localStorage.getItem("responseAtomState");
  return savedState
    ? JSON.parse(savedState)
    : {
        id: "",
        username: "",
        firstName: "",
        lastName: "",
        isLogged: false,
        isLoggedOut: true,
      };
};

// Recoil atom with persistent state
export const responseAtom = atom({
  key: "responseAtomStatea",
  default: getInitialState(),
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newState) => {
        // Save the new state to localStorage
        localStorage.setItem("responseAtomState", JSON.stringify(newState));
      });
    },
  ],
});
