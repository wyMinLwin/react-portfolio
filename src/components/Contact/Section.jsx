import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Section = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_a8jcspn', 'template_pt9du27', form.current, 'xDCm-3rmHue7zPuBM');
        e.target.reset()
        
      };


  return (
    <section className='container my-auto'>
        <div className='row d-flex justify-content-center align-items-center'>
            <div className="wow animate__animated animate__bounceInLeft col-12 col-md-6 d-flex justify-content-center align-items-center">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <input type="text" name='user_name' placeholder='Name' className="form-control" />    
                    </div>
                    <div className="mb-3">
                        <input type="email" name='user_email' placeholder='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <textarea className='form-control h-100' name='message'></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary fw-semibold">Send</button>
                </form>
            </div>
            <div className="wow animate__animated animate__bounceInRight fw-semibold col-12 col-md-6 d-flex flex-column align-items-start justify-content-center">
                <div className='fs-5' >
                    If you want to talk about programming or wanna offer a job.
                    Or for some reason you can contact me anytime.
                </div>
                <div className='fs-5 my-3'>
                    I will make a coffee and reply you as soon as I saw your message.
                </div>
                <div className='fs-5'>
                    Direct to my email: <br /><span className='fw-bold fs-4'
                    onMouseOver={(e) => e.target.classList.add('text-primary')}
                    onMouseOut={(e) => e.target.classList.remove('text-primary')}
                    >waiyanminlwin421@gmail.com</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section