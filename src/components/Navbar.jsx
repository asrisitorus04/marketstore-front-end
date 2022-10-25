import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white px-10 py-3 flex justify-between sticky top-0 z-10 shadow-lg">
      <div>
        <Link to="/home">
          <h1 className="text-2xl font-bold">
            <span className="text-black">Kelontong</span>
            <span className="text-primary">pedia</span>
          </h1>
        </Link>
      </div>
      <div className="w-2/6 md:flex flex-row mt-form-control input rounded-full hidden border-2 border-black border-lg items-center">
        <input
          type="text"
          placeholder="Search Product ..."
          className="w-full outline-none"
        />
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
      <div className="flex gap-6">
        <Link to="/home" className="font-bold hover:text-primary">
          Home
        </Link>
        <Link to="/mycart" className="font-bold hover:text-primary">
          Cart
        </Link>

        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="avatar">
            <div className="w-8 rounded-full mt-2">
              <img src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png" />
            </div>
          </button>

          <ul
            tabIndex={0}
            className="dropdown-content menu shadow-lg bg-white rounded-lg w-40"
          >
            <li className=" p-2">
              <button className="text-black text-center font-medium active:bg-[#FDE1CE]">
                Profile
              </button>
            </li>

            <hr className="text-main" />

            <li className=" p-2">
              <button className="text-black text-center font-medium active:bg-[#FFEBEB]">
                History
              </button>
            </li>

            <hr className="text-main" />

            <li className=" p-2">
              <button className="text-black text-center font-medium active:bg-[#FFEBEB]">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
