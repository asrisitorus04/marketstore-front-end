import React from 'react'
import FormSell from './forms/FormSell'

const ModalSell = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="w-full modal flex justify-center">
        <div className="relative flex flex-col justify-center">
          <FormSell/>
        </div>
      </div>
    </>
  )
}

export default ModalSell