import React from "react";
import { WithRouter } from "../../utils/navigation";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiRequest } from "../../utils/apiRequest";

import Input from "./Input";
import { Signup } from "../buttons/ButtonSubmit";

const RegisterForm = (props) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userName && email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password, userName]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      username: userName,
      email,
      password,
    };
    apiRequest("register", "post", body)
      .then((res) => {
        const { message, data } = res;
        if (data) {
          location.reload();
        }
        alert(message);
      })
      .catch((err) => {
        const { message } = err.response.data;
        alert(message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className="w-full md:w-96 h-screen bg-white shadow-lg px-10 pt-10 space-y-5 z-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        <label htmlFor="my-modal-4" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
      </div>
      <div>
        <h1 className="text-2md font-semibold">Username</h1>
        <Input
          id="Input Username"
          placeholder="Input Username"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <h1 className="text-2md font-semibold">Email</h1>
        <Input
          id="Input Email"
          placeholder="Input Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <h1 className="text-2md font-semibold">Password</h1>
        <Input
          id="Input Password"
          placeholder="Input Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4 items-center text-[13px] text-center">
        <div>
          Have an account?
          <label
            htmlFor="my-modal-4"
            className="text-primary font-semibold hover:underline cursor-pointer"
          >
            Login Now!
          </label>
        </div>
        <Signup
          onClick={(e) => handleSubmit(e)}
          loading={loading || disabled}
        />
      </div>
    </div>
  );
};

export default WithRouter(RegisterForm);
