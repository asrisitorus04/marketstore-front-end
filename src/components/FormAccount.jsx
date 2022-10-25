import React from 'react'

export const FormAccount = () => {
  return (
    <>
    <div className='w-80 mt-10 ml-10'>
    <div className='font-bold text-primary text-2xl'>Account Information</div>
          <div className="mt-4 grid grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-semibold text-black">Username:</label>
              <label className="block mb-2 text-sm font-semibold text-black">Email:</label>
              <label className="block mb-2 text-sm font-semibold text-black">Handphone:</label>
            </div>
            <div>
            <label className="block mb-2 text-sm font-semibold text-black">Handoko</label>
              <label className="block mb-2 text-sm font-semibold text-black">handoko@gmail.com</label>
              <label className="block mb-2 text-sm font-semibold text-black">0888-0822-2244</label>
            </div>
          </div>

          <div className='mt-10'>
          <div className='font-bold text-primary text-2xl'>Biodata</div>
          <div className="grid grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-semibold text-black">Name:</label>
              <label className="block mb-2 text-sm font-semibold text-black">Address:</label>
            </div>
            <div>
            <label className="block mb-2 text-sm font-semibold text-black">Handoko</label>
              <label className="block mb-2 text-sm font-semibold text-black">Jl. Handoko Gang 2...</label>
            </div>
          </div>
          </div>
          </div>
    </>
  )
}
