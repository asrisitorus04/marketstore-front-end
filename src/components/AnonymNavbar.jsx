import React from "react";
import { Link } from "react-router-dom";


const NavbarAnonym = () => {
  return (
          <div className="navbar bg-white px-5 md:px-10 py-3 flex justify-between sticky top-0 z-10 shadow-lg">
            <div>
              <Link to="/">
                <h1 className="text-2xl font-bold">
                  <span className="text-black">Kelontong</span>
                  <span className="text-primary">pedia</span>
                </h1>
              </Link>
            </div>
            <div className="md:flex flex-row mt-form-control input rounded-full hidden border-2 border-black border-lg items-center">
              <input type="text" placeholder="Search Product ..." />
              <button className="py-3.5 pl-3 pr-2 border-y-2 border-l-2 border-none bg-main rounded-l-lg ">
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex gap-2 md:gap-6">
              <Link to="/" className="hidden md:block font-bold  hover:text-primary">
                Home
              </Link>
              <Link to="/mycart" className="font-bold  hover:text-primary">
                Cart
              </Link>
              <label
                htmlFor="my-modal-3"
                className="px-6 py-1 font-bold border-2 rounded-lg border-primary bg-primary text-white hover:bg-white hover:text-primary cursor-pointer"
              >
                Login
              </label>
            </div>
          </div>
  );
};

export default NavbarAnonym;
