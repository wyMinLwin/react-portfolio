import React from 'react'

const Footer = ({theme}) => {
  return (
    <footer className='p-4 d-flex flex-column text-center border-top'>
        <a href='/' className='navbar-brand fs-2 fw-semibold mb-3'>Wai Yan</a>
        <div className='d-flex justify-content-center align-items-center fs-4 mb-3'>
            <a className={`mx-3 ${theme ? ' text-light' : ' text-dark'}`} href='https://github.com/wyMinLwin/'><i className=" fa-brands fa-github"></i></a>
            <a className={`mx-3 ${theme ? ' text-light' : ' text-dark'}`} href='https://www.facebook.com/waiyan.minlwin.161/'><i className=" fa-brands fa-facebook"></i></a>
            <a className={`mx-3 ${theme ? ' text-light' : ' text-dark'}`} href='https://www.instagram.com/wymin_lwin/'><i className=" fa-brands fa-instagram"></i></a>
        </div>
        <p className='text-muted '>&#169;2022 All rights reserved to Wai Yan Min Lwin</p>
    </footer>
  )
}

export default Footer