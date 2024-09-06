import { useEffect, useState } from "react";
import { BottomWarning } from "../componennt/BottomWarning";
import { Button } from "../componennt/Button";
import { Header } from "../componennt/Header";
import { InputBox } from "../componennt/InputBox";
import { SubHeading } from "../componennt/SubHeading";
import { TransferSuccessful } from "../componennt/TransferSuccessful";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { responseAtom } from "../atom/atoms";

export const Signin = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setResponseAtomVal = useSetRecoilState(responseAtom);
  let { state } = useLocation();
  const logval = state?.logval || false;
  const Navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      // console.log(response.data.msg);

      if (response.status === 200) {
        const { username, _id, firstname, lastname } = response.data;
        setResponseAtomVal({
          id: _id,
          username: username,
          firstName: firstname,
          lastName: lastname,
          isLogged: true,
          isLoggedOut: false,
        });
        Navigate("/");
      }
    } catch (error) {
      console.error("ooo kharap hai kharap hai ", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-500  h-screen flex  justify-center items-center relative">
      <div className="absolute top-4 right-4">
        {showMessage && logval && (
          <TransferSuccessful message={"user logged out "} />
        )}
      </div>
      <div>
        <div className="w-[22rem] h-[400px] border-2 rounded-md flex flex-col justify-center bg-transparent/10 shadow-2xl border-blue-700">
          <Header label={"Sign In"} />
          <SubHeading label={"Enter Your credential to access your account"} />
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            label="Email"
            placeholder="Jhon@gmail.com"
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Halamati@habibi"
          />
          <Button name="Sign in" onClick={handleSignin} />
          <BottomWarning label="Don't have an account ?" page="signup" />
        </div>
      </div>
    </div>
  );
};
