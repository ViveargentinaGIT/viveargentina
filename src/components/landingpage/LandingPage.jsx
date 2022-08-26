import { Link } from "react-router-dom";
import React, { Fragment } from "react";

import "./LandingPage.css";
import Video from '../../assets/logo corto glitch.mp4'

function Landing() {

  return (
    <Fragment>
        <div className="gif">
            <Link to="/home">
              <video autoPlay  id='video'>
                <source src={Video} type='video/mp4'/>
                </video> 
            </Link>
        </div>
    </Fragment>

  );
}

export default Landing;
