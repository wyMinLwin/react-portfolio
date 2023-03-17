import React from 'react'
import Typewriter from 'typewriter-effect';
import Profile from '../../assets/pf.jpg';

const Section = () => {
  return (
    <section className='container my-auto'>
        <div className='row g-0 d-flex flex-column-reverse flex-lg-row'>
            <div className={`wow animate__animated animate__bounceInLeft col-12 col-lg-6 mt-5 mt-lg-0 fs-1 fw-semibold d-flex align-items-center justify-content-center `} >
                <div className='d-flex flex-column align-items-center justify-content-center'>

                    <div>
                        <Typewriter 
                            options={{
                                delay : 1,
                                loop : true,
                                deleteSpeed : 1,
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('W@! ^@# ^!# @$%(')
                                .deleteChars(15)
                                .typeString('+= @_# :-0 :3|)')
                                .deleteChars(15)
                                .typeString('AI YAN MIN LWIN')
                                .pauseFor(5000)
                                .start();
                            }}
                        />
                        
                    </div>
                    <div className='fs-1'>
                        FRONT-END 
                    <div className='bg-primary' style={{height:'3px'}}></div>
                    </div>
                    <div className='fs-1'>
                        DEVELOPER
                    <div className='bg-primary' style={{height:'3px'}}></div>
                    </div>
                </div>
            </div>
            <div className='wow animate__animated animate__bounceInRight col-12 col-lg-6 d-flex align-items-center justify-content-center mt-5 mt-lg-0'>
                <img src={Profile} alt={'wai yan min lwin pic'} className={`profile_animate`} style={{width:'50%'}}></img>
            </div>
        </div>
    </section>
  )
}

export default Section