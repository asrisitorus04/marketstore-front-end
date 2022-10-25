import React from 'react'
import { EditProfile, SellProduct } from './buttons/ButtonAdd'

const CardUser = () => {
  return (
    <div
      className="mt-6 ml-20 w-80 p-4 flex flex-col items-center gap-2 hover:brightness-110 cursor-pointer"
    >
      <img
        src="https://placeimg.com/400/300/arch"
        alt="Clothes"
        className="object-containt w-100 h-80 rounded-lg"
      />
      <div className="mt-8 flex flex-col gap-0 text-center">
        <p className="font-bold text-black text-4xl">Handoko</p>
        <p className="mt-2 text-base text-primary font-bold">0888-0822-2244</p>
        <div className='mt-8 mb-10 w-full flex flex-row'>
            <div className='items-start'><EditProfile/></div>
            <div className='justify-start'><SellProduct/></div>
        </div>
        </div>
    </div>
  )
}

export default CardUser