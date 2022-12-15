import React from 'react'

const Header = () => {
  return (
    <div className={`container mt-5 d-flex flex-column justify-content-center align-items-center`}>
        <div className='h2 fw-semibold'>Projects</div>
        <div className='text-muted fw-semilight fs-5 my-1'>Recent Works</div>
    </div>
  )
}

export default Header