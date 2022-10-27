import React from 'react'
import { EditProfile, SellProduct } from './buttons/ButtonAdd'

const CardUser = ({data}) => {
  return (
    <div
      className="mt-6 ml-20 w-80 p-4 flex flex-col items-center gap-2 hover:brightness-110 cursor-pointer"
    >
      <img
        src={data?.image}
        alt="Clothes"
        className="object-containt w-100 h-80 rounded-lg"
      />
      <div className="mt-8 flex flex-col gap-0 text-center">
        <label className="font-bold text-black text-4xl">{data?.name}</label>
        <label className="mt-2 text-base text-primary font-bold">{data?.phone}</label>
        <div className='mt-8 mb-10 w-full flex flex-row'>
            <div className='items-start'><EditProfile/></div>
            <div className='justify-start'><SellProduct/></div>
        </div>
        </div>
    </div>
  )
}

export default CardUser