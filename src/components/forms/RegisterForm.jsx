import React from 'react'
import Input from './Input'
import { Signup } from '../buttons/ButtonSubmit'

const RegisterForm = () => {
  return (
    <div className='w-full md:w-96 h-screen bg-white shadow-lg px-10 pt-10 space-y-5 z-10'>
        <div className='flex flex-row justify-between'>
            <h1 className='text-2xl font-semibold'>Sign Up</h1>
            <label htmlFor='my-modal-4' className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </label>
        </div>
        <div>
            <h1 className='text-2md font-semibold'>Username</h1>
            <Input/>
        </div>
        <div>
            <h1 className='text-2md font-semibold'>Email</h1>
            <Input/>
        </div>
        <div>
            <h1 className='text-2md font-semibold'>Password</h1>
            <Input/>
        </div>
        <div className='flex flex-col gap-4 items-center text-[13px] text-center'>
            <div>Have an account?  
            <label htmlFor='my-modal-4' className='text-primary font-semibold hover:underline cursor-pointer'> Login Now!</label>
            </div>
            <Signup></Signup>
        </div>
    </div>
  )
}

export default RegisterForm