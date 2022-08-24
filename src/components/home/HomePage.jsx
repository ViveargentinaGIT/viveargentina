
import React, { Fragment } from 'react'


import Navbar from '../navbar/navBar'
import './HomePage.css'


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
                <button className="explore" onClick={HomePage}>
                EXPLORE >>
            </button>
            </div>
            </div>
            <div className='corners'>
                <div>
                    
                </div>
                <h1>hola</h1>
            </div>
        </Fragment>
    )
}

export default HomePage