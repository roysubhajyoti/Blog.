import { useState } from "react";
import axios from "axios";
import { BottomWarning } from "../componennt/BottomWarning";
import { Button } from "../componennt/Button";
import { Header } from "../componennt/Header";
import { InputBox } from "../componennt/InputBox";
import { SubHeading } from "../componennt/SubHeading";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:3000/api/v1/user/signup", {
        username,
        password,
        firstname,
        lastname,
      });

      Navigate("/signin");
    } catch (error) {
      console.error(
        "Signup failed",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 h-screen flex  justify-center items-center ">
      <div className="w-[22rem] h-[580px] border-2 rounded-md flex flex-col justify-center bg-transparent/10 shadow-2xl border-blue-700 dark:border-midnightLite">
        <Header label={"Signup"} />
        <SubHeading label={"Enter Your Information to create an account"} />
        <InputBox
          onChange={(e) => setFirstName(e.target.value)}
          label="First Name"
          placeholder="Jhon"
          type="text"
        />
        <InputBox
          onChange={(e) => setLastName(e.target.value)}
          label="Last Name"
          placeholder="Doe"
          type="text"
        />
        <InputBox
          onChange={(e) => setUsername(e.target.value)}
          label="Email"
          placeholder="Jhon@gmail.com"
          type="email"
        />
        <InputBox
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Halamati@habibi"
          type="password"
        />
        <Button name="Sign up" onClick={handleSignup} />

        <BottomWarning label="Already have an account ?" page="signin" />
      </div>
    </div>
  );
};
