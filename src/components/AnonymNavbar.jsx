import React from 'react'
import { Link } from 'react-router-dom'

const NavbarAnonym = () => {
  return (
    <div className="navbar bg-white px-10 py-3 flex justify-between sticky top-0 z-10 shadow-lg">
      <div>
        <Link to="/">
          <h1 className="text-2xl font-bold">
            <span className="text-black">Kelontong</span>
            <span className="text-primary">pedia</span>
          </h1>
        </Link>
      </div>
      <div className="md:flex flex-row mt-form-control input rounded-full hidden border-2 border-black border-lg items-center">
            <input
          type="text"
          placeholder="Search Product ..."
        />
        <button className="py-3.5 pl-3 pr-2 border-y-2 border-l-2 border-none bg-main rounded-l-lg ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
      <div className="gap-4">
        <Link to="/home">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </Link>
        <Link to="/mycart">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </Link>
        <button>Login</button>
      </div> 
    </div>
  )
}

export default NavbarAnonym