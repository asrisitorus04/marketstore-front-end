import React from "react";

export const Submit = () => {
  return (
    <div>
      <button className="login px-4 py-2 rounded-md text-white font-semibold border-2 border-[#358600] shadow-lg transform active:scale-75 transition-transform mx-5 flex">
        <span className="text-login text-[#358600] text-center ">SUBMIT</span>
      </button>
    </div>
  );
};

export const Signup = () => {
  return (
    <div>
      <button className="login px-6 py-2 rounded-md text-primary font-semibold border-2 border-[#358600] transform active:scale-75 transition-transform mx-5 flex hover:bg-primary hover:text-white ">
        <span className="text-login text-center ">SIGN UP</span>
      </button>
    </div>
  );
};

export const Login = () => {
  return (
    <div>
      <button className="login px-6 py-1 rounded-md text-primary font-semibold border-2 border-[#358600] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white ">
        <span className="text-login text-center ">LOGIN</span>
      </button>
    </div>
  );
};
