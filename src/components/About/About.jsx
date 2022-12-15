import React, { Fragment } from 'react'
import Header from './Header'
import Section from './Section'

const About = () => {
  return (
    <Fragment>
        <div id='about' className={`wrapper d-flex flex-column `}>
            <Header />
            <Section />
        </div>
    </Fragment>
  )
}

export default About