import React from 'react'

const Pagination = (paginateFront, paginateBack) => {
  return (
    <>
    <div>
        <nav className='inline-flex' aria-label='Pagination'>
            <a onClick={() => {paginateBack(); 
            }} href='#' className='inline-flex items-center px-2 py-2 font-medium text-[#2D2D2D] hover:text-gray-500 hover:font-semibold'>
                <span>Prev</span>
            </a>

            <a onClick={() => {paginateFront();
            }} href='#' className='inline-flex items-center px-2 py-2 font-medium text-[#2D2D2D] hover:text-gray-500 hover:font-semibold'>
                <span>Next</span>
            </a>
        </nav>
    </div>
    </>
  )
}

export default Pagination