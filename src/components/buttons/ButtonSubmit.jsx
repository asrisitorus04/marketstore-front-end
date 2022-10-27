import { data } from "autoprefixer";
import React from "react";

export const Submit = ({onClick}) => {
  return (
    <div>
      <button className="login px-4 py-2 rounded-md text-white font-semibold border-2 border-[#358600] shadow-lg transform active:scale-75 transition-transform mx-5 flex">
        <span className="text-login text-[#358600] text-center " onClick={onClick} >SUBMIT</span>
      </button>
    </div>
  );
};

export const Signup = (props) => {
  return (
    <div>
      <button className="login px-6 py-2 rounded-md text-primary font-semibold border-2 border-[#358600] transform active:scale-75 transition-transform mx-5 flex hover:bg-primary hover:text-white " 
      onClick={props.onClick}
      >
        <span className="text-login text-center ">SIGN UP</span>
      </button>
    </div>
  );
};

export const Login = (props) => {
  return (
    <div>
      <button className="login px-6 py-1 rounded-md text-primary font-semibold border-2 border-[#358600] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white "
      onClick={props.onClick}
      >
        <span className="text-login text-center ">LOGIN</span>
      </button>
    </div>
  );
};
