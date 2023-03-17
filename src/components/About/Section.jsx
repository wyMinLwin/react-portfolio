import React from 'react'
import Profile from '../../assets/pf.jpg';
import Resume from '../../assets/resume.pdf';

const Section = () => {
  return (
    <section className='container my-auto'>
        <div className='row g-0'>
            <div className="wow animate__animated animate__bounceInLeft col-12 col-lg-6 d-flex justify-content-center align-items-center my-3 mt-lg-0">
                <img src={Profile} alt={'wai yan min lwin pic'} className={`rounded`} style={{width:'50%'}}></img>
            </div> 
            <div className="wow animate__animated animate__bounceInRight col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center mt-3 mt-lg-0">
                <p className='fw-semibold fs-5 p-1 text-center'>
                    Hello World! I am Wai Yan Min Lwin, A Front-end Developer based on Yangon.
                    Available to work both remote and Yangon region.
                </p>
                <a href={Resume} download={'download'} className='btn btn-primary fw-semibold'>My Resume</a>
            </div>
        </div>
    </section>
  )
}

export default Section