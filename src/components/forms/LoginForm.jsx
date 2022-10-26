import React, {useEffect, useState} from "react";
import Input from "./Input";
import { Login } from "../buttons/ButtonSubmit";
import { WithRouter } from "../../utils/navigation";
import {apiRequest} from '../../utils/apiRequest'
import {handleAuth} from '../../utils/reducers/reducer'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (email && password) {
      setDisabled(false) 
    } else {
      setDisabled(true)
    }
  }, [email,password])
    
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const body = {
      email,
      password
    }
    apiRequest("login", "post", body)
    .then((res) => {
      const {token, message} = res
      localStorage.setItem("token ", token)
      dispatch(handleAuth(true))
      alert(message)
      navigate("/home")

    })
    .catch((err) => {
      const {data} = err.response
      alert(data.message)

    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <div className="w-full md:w-96 h-screen bg-white shadow-lg px-10 pt-10 space-y-5 z-10"
    onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-semibold">Login</h1>
        <label htmlFor="my-modal-3" className="cursor-pointer">
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
        id="Input Username Lgn"
        placeholder="Input Username"
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <h1 className="text-2md font-semibold">Password</h1>
        <Input
        id="Input Password Lgn"
        placeholder="Input Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="flex flex-col gap-4 items-center text-[13px] text-center">
        <div>
          Dont have an account? 
          <label htmlFor="my-modal-4"
            className="text-primary font-semibold hover:underline cursor-pointer"
          >
            Sign Up Now!
          </label>
        </div>
        <Login 
        onClick={(e) => handleSubmit(e)}
        loading={loading || disabled}/>
      </div>
    </div>

  );
};

export default LoginForm;
