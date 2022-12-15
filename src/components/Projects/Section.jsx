import React from 'react';
import Data from './Data';
import '@fortawesome/fontawesome-free/css/all.min.css'

const Section = () => {

    return (
    <section className='container my-auto'>
        <div className='row g-0 d-flex justify-content-center justify-content-center align-items-center'>
            {Data.map(site => (
                <div key={site.id} className="wow animate__animated animate__fadeInUp m-3 card col-12 col-lg-4 "style={{width: '18rem'}}>
                    <img src={site.img} className="card-img-top" alt={site.img}></img>
                    <div className="card-body">
                        <h5 className="card-title text-dark">{site.name}</h5>
                        <a href={site.url} className="text-muted text-dark text-decoration-none">
                            Demo<i className='ms-1 fas fa-arrow-right text-muted fs-6 text-dark'></i>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Section