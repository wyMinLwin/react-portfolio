import React, { useEffect, useState } from 'react'
// 0 - 910 - 1809 - 2683 - 3584
const NavBar = ({theme}) => {
    const [offsetHeight,setOffsetHeight] = useState(0);
    window.addEventListener('scroll',e => setOffsetHeight(window.pageYOffset));

    const [active,setActive] = useState('home');

    useEffect(() => {
        if (document.querySelector('#home').offsetTop < offsetHeight && document.querySelector('#about').offsetTop-400  > offsetHeight ) {
            setActive('home')
        } else if (document.querySelector('#about').offsetTop-400 < offsetHeight && document.querySelector('#projects').offsetTop-400 > offsetHeight ) {
            setActive('about')
        } else if (document.querySelector('#projects').offsetTop-400 < offsetHeight && document.querySelector('#skills').offsetTop-400 > offsetHeight ) {
            setActive('projects')
        } else if (document.querySelector('#skills').offsetTop-400 < offsetHeight && document.querySelector('#contact').offsetTop-400 > offsetHeight ) {
            setActive('skills')
        } else if(document.querySelector('#contact').offsetTop-400 <= offsetHeight){
            setActive('contact')
        }
    
    },[offsetHeight])
    
   
  return (
    <nav className={`navbar navbar-expand-md sticky-top${theme ? ' bg-dark navbar-dark' : 'bg-light navbar-light'}`}>
        <div className='container'>
            <a className='navbar-brand fs-5 fw-semibold' href='/'>Wai Yan</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a
                        onClick={() => setActive('home')}
                        className={`nav-link fw-semibold  me-2 ${active === 'home' && ' active'}`} aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a 
                        onClick={() => setActive('about')}
                        className={`nav-link fw-semibold  me-2 ${ active === 'about' && ' active'}`} aria-current="page" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a
                        onClick={() => setActive('projects')} 
                        className={`nav-link fw-semibold  me-2 ${ active === 'projects' && ' active'}`} aria-current="page" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a 
                        onClick = {() => setActive('skills')}
                        className={`nav-link fw-semibold  me-2 ${ active === 'skills' && ' active'}`} aria-current="page" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a 
                        onClick = {() => setActive('contact')}
                        className={`nav-link fw-semibold  me-2 ${ active === 'contact' && ' active'}`} aria-current="page" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar