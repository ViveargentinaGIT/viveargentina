import { Link } from "react-router-dom";
import React, { Fragment } from "react";

import "./LandingPage.css";
import Video from '../../assets/logo corto glitch.mp4'

function Landing() {

  return (
    <Fragment>
            <Link to="/home">
        <div className="gif">
              <video autoPlay loop id='video'>
                <source src={Video} type='video/mp4'/>
                </video> 
        </div>
            </Link>
    </Fragment>

  );
}

export default Landing;
