import React from "react";
import { Submit } from "./buttons/ButtonSubmit";
import { CardModal } from "./CardModal";


const Modal = ({}) => {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="w-full modal flex justify-center">
        <div className="relative flex flex-col justify-center">
        <div className="bg-white">
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white w-4/6 h-4/5 rounded-2xl shadow-lg">
            <div className="flex flex-row w-full mt-10">
              <div className="ml-16">
                <div className="font-bold text-4xl text-black ml-10">Edit Profile</div>
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-4 top-4"> ✕ </label>
                <CardModal/>
              </div>
                    <div className="ml-10 w-full">
                <div className="w-full mt-8 ml-2">
                  <div className="flex flex-row">
                    <div className="w-28">
                      <label className="block w-ful h-10 mb-6 text-xl font-bold text-black"> Username </label>
                      <label className="block w-ful h-10 mb-6 text-xl font-bold text-black"> Email </label>
                      <label className="block w-ful h-10 mb-6 text-xl font-bold text-black"> Handphone </label>
                      <label className="block w-ful h-10 mb-6 text-xl font-bold text-black"> Name </label>
                      <label className="block w-ful h-10 text-xl font-bold text-black"> Address </label>
                    </div>
                    <div className="ml-10">
                    <input className='h-10 mb-6 w-80 border-2 border-primary rounded-lg' placeholder='' type="text"/>
                    <input className='h-10 mb-6 w-80 border-2 border-primary rounded-lg' placeholder='' type="text"/>
                    <input className='h-10 mb-6 w-80 border-2 border-primary rounded-lg' placeholder='' type="text"/>
                    <input className='h-10 mb-6 w-80 border-2 border-primary rounded-lg' placeholder='' type="text"/>
                    <input className='h-10 mb-6 w-80 border-2 border-primary rounded-lg' placeholder='' type="text"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center ml-96"><Submit/></div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
