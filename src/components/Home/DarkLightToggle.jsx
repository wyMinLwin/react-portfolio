import React from 'react';
import Switch from 'react-switch';
import '@fortawesome/fontawesome-free/css/all.min.css'

const DarkLightToggle = ({theme,toggleTheme}) => {
  return (
    <div className='my-1 d-flex justify-content-end container'>
        <div className=''>
            <Switch
            activeBoxShadow="0"
            onChange={() => toggleTheme()} 
            handleDiameter={20}
            offColor="#000"
            onColor="#000"
            offHandleColor="#fe4164"
            onHandleColor="#fe4164"
            checked={theme}
            checkedIcon = {
                <i className='fas fa-sun'
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 15,
                    color: "#ff9933",
                    paddingRight: 2
                  }}
                ></i>
            }
            uncheckedIcon = {
                <i className='fas fa-moon'
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 15,
                    color: "#04d9ff",
                    paddingRight: 2
                  }}
                ></i>
            }
            
            />
        </div>
    </div>
  )
}

export default DarkLightToggle