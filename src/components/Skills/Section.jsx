import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'


const Section = () => {
    const [skills] = useState([
        {name:'HTML',icon:'fa-brands fa-html5'},
        {name:'CSS',icon:'fa-brands fa-css3-alt'},
        {name:'BOOTSTRAP',icon:'fa-brands fa-bootstrap'},
        {name:'SASS',icon:'fa-brands fa-sass'},
        {name:'JAVASCRIPT+ES6',icon:'fa-brands fa-js'},
        {name:'REACT',icon:'fa-brands fa-react'},
        {name:'PHP',icon:'fa-brands fa-php'},
        {name:'GIT',icon:'fa-brands fa-git-alt'},
    
    ])
  return (
    <section className='container my-auto'>
        <div className='row g-0 d-flex justify-content-center align-items-center'>
            {
                skills.map(skill => (
                    <div key={skill.name} className='wow animate__animated animate__bounceInUp col-4 col-lg-3 d-flex flex-column align-items-center my-5'>
                        <i className={`${skill.icon} fs-1`}
                    
                        onMouseOver={(e) => e.target.classList.add('text-primary')}
                        onMouseOut={(e) => e.target.classList.remove('text-primary')}
                        ></i>
                        <div className=' mt-1'
                         onMouseOver={(e) => e.target.classList.add('text-primary')}
                         onMouseOut={(e) => e.target.classList.remove('text-primary')}
                        >{skill.name}</div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Section