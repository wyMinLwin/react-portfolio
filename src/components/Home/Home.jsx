import React, { Fragment } from 'react'
import DarkLightToggle from './DarkLightToggle'
import Section from './Section'

const Home = ({theme,toggleTheme}) => {
  return (
    <Fragment>
        <div id='home' className='wrapper d-flex flex-column' >
            <DarkLightToggle theme={theme} toggleTheme={toggleTheme} />
            <Section />
        </div>
    </Fragment>
  )
};

export default Home