import React from 'react'
import Input from './Input'
import { Login } from '../buttons/ButtonSubmit'

const LoginForm = () => {
  return (
    <div className='w-full md:w-96 h-screen bg-white shadow-lg px-10 pt-10 space-y-5'>
        <div className='flex flex-row justify-between'>
            <h1 className='text-2xl font-semibold'>Login</h1>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
        <div>
            <h1 className='text-2md font-semibold'>Username</h1>
            <Input></Input>
        </div>
        <div>
            <h1 className='text-2md font-semibold'>Password</h1>
            <Input></Input>
        </div>
        <div className='text-[13px] text-center'>
            <div>Dont have an account? 
            <button className='text-primary'> Sign Up Now!</button>
            </div>
            <Login></Login>
        </div>
    </div>
  )
}

export default LoginForm