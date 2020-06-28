import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import Brain from './Brain.png'

const Logo = () => {
    return(
        <div>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img style={{paddingTop:'20px'}} alt='logo' src={Brain}></img> </div>
            </Tilt>
        </div>
    );
}

export default Logo;