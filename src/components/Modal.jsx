import React from "react";
import FormModal from "./forms/FormModal";

const Modal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="w-full modal flex justify-center">
        <div className="relative flex flex-col justify-center">
          <FormModal />
        </div>
      </div>
    </>
  );
};

export default Modal;
