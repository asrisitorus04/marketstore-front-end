import React from 'react'

export const Submit = () => {
  return (
    <div>
        <button className="login px-4 py-2 absolute rounded-md text-white border-4 border-[#358600] shadow-lg transform active:scale-75 transition-transform mx-5 flex">
            <span className="text-login text-[#358600] text-center ">SUBMIT</span>
        </button>
      </div>
  )
}

export const Signup = () => {
    return (
      <div>
          <button className="login px-4 py-2 absolute rounded-md text-white border-4 border-[#358600] shadow-lg transform active:scale-75 transition-transform mx-5 flex">
            <span className="text-login text-[#358600] text-center ">SIGN UP</span>
        </button>
        </div>
    )
  }

  export const Login = () => {
    return (
      <div>
          <button className="login px-4 py-2 absolute rounded-md text-white border-4 border-[#358600] shadow-lg transform active:scale-75 transition-transform mx-5 flex">
              <span className="text-login text-[#358600] text-center ">LOGIN</span>
          </button>
        </div>
    )
  }