import React from 'react'

export const FormAccount = ({data}) => {

  return (
    <>
    <div className='w-80 mt-10 ml-10'>
    <div className='font-bold text-primary text-2xl'>Account Information</div>
          <div className="mt-4 grid grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-semibold text-black">username:</label>
              <label className="block mb-2 text-sm font-semibold text-black">email:</label>
              <label className="block mb-2 text-sm font-semibold text-black">phone:</label>
            </div>
            <div>
            <label className="block mb-2 text-sm font-semibold text-black">{data?.username}</label>
              <label className="block mb-2 text-sm font-semibold text-black">{data?.email}</label>
              <label className="block mb-2 text-sm font-semibold text-black">{data?.phone}</label>
            </div>
          </div>

          <div className='mt-10'>
          <div className='font-bold text-primary text-2xl'>Biodata</div>
          <div className="grid grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-semibold text-black">name:</label>
              <label className="block mb-2 text-sm font-semibold text-black">address:</label>
            </div>
            <div>
            <label className="block mb-2 text-sm font-semibold text-black">{data?.name}</label>
              <label className="block mb-2 text-sm font-semibold text-black">{data?.address}</label>
            </div>
          </div>
          </div>   
          </div>
    </>
  )
}