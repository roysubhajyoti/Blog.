import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useResetRecoilState } from "recoil";
import { responseAtom } from "../atom/atoms";

export const Logout = () => {
  const navigate = useNavigate();
  const resetResponseState = useResetRecoilState(responseAtom);

  useEffect(() => {
    resetResponseState();
    localStorage.removeItem("responseAtomState");
    const logout = async () => {
      try {
        await axios.post("http://localhost:3000/api/v1/user/logout");
        navigate("/signin", { state: { logval: true } });
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    logout();
  }, [navigate, resetResponseState]);

  return null;
};
