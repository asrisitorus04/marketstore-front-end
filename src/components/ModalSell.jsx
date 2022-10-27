import React from 'react'
import { Submit } from './buttons/ButtonSubmit'
import { CardModal } from './CardModal'

const ModalSell = ({onSubmit, onClick, name, stock, description, images, price}) => {
  return (
    <>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="w-full modal flex justify-center" onSubmit={onSubmit}>
        <div className="relative flex flex-col justify-center">
        <div className="bg-white">
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white w-4/6 h-4/5 rounded-2xl shadow-lg">
            <div className="flex flex-row w-full mt-10">
              <div className="ml-16">
                <div className="font-bold text-3xl text-black ml-10">Selling Product</div>
                <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-4 top-4"> ✕ </label>
                <CardModal
                images={images}
                />
              </div>
              <div className="ml-10 w-full">
                <div className="w-full mt-8 ml-2">
                  <div className="flex flex-row">
                    <div className="w-28">
                      <label className="block w-ful h-10 mb-6 mt-3 text-xl font-bold text-black"> Name </label>
                      <label className="block w-ful h-10 mb-6 text-xl font-bold text-black"> Price </label>
                      <label className="block w-ful h-10 mb-6 text-xl font-bold text-black"> Detail </label>
                    </div>
                    <div className="ml-10">
                    <input className='h-10 mt-2 w-80 border-2 border-primary rounded-lg' placeholder='' type="text"
                    onChange={name}
                    />
                    <input className='h-10 mt-6 w-80 border-2 border-primary rounded-lg' placeholder='' type="text"
                    onChange={price}
                    />
                    <input className='h-40 mt-10 w-80 border-2 border-primary rounded-lg' placeholder='' type="text"
                    onChange={description}
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  )
}

export default ModalSell