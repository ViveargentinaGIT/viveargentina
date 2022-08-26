
import React, { Fragment } from 'react'


import Navbar from '../navbar/navBar'
import Slider from './slider/Slider'

import './HomePage.css'
import Landing from '../landingpage/LandingPage'


function HomePage() {
    return (
        <Fragment>
            <div className='containerHome'>
            <div className='firstPage'>
                <Navbar/>
            </div>
            <div>
                <h1 className='mainTitle'>
                One Destination <br/>
                Thousand Experiences
                </h1>
                <h3 className='subTitle'>
                Let yourself be enchanted by every corner of this country
                </h3>
                <button className="explore" onClick={Landing}>
                EXPLORE 
            </button>
            </div>
            </div>
            <div className='cities'>
                <div className='citiesTitle'>
                    <h4>CITIES</h4> 
                    <h6 className='citiesSubtitle'>In each province aroma, color, flavor, path is unique and unrepeatable</h6>
                </div>
                <div className='slider'>
                <Slider/>
                </div>
            </div>

        </Fragment>
    )
}

export default HomePage