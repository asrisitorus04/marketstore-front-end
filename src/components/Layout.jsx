import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-full overflow-auto h-screen'>
      {children}
      </div>
  )
}

export default Layout