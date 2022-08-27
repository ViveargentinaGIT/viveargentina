// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import CarouselCity from '../Carousel/Carousel.City'
import styles from './City.module.css';


export default function Card() {

    return (
        <div class="container-fluid">

            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <CarouselCity />
                    </div>
                    <div class="col-md-6">
                        <h2>Mendoza </h2>
                        {/* <h2>{Title}</h2> */}
                        <h4>The land of sun and good wine</h4>
                        {/* <h4>{Subtitle}</h4> */}
                        
                        <ul className={styles.scorecity}>
                        {/* {Score} */}
                            <li><i class="bi bi-star-fill" Style="color:#C49D48" ></i></li>
                            <li><i class="bi bi-star-fill"Style="color:#C49D48"></i></li>
                            <li><i class="bi bi-star-fill"Style="color:#C49D48"></i></li>
                            <li><i class="bi bi-star-fill"Style="color:#C49D48"></i></li>
                            <li><i class="bi bi-star"></i></li>
                        </ul>
                        <p> Mendoza es sinónimo de sol y vino de calidad, es considerada la “Capital Mundial del Vino”. Perteneciente a la región de Cuyo , es también es centro del turismo hacia la Cordillera Andina y del Cerro Aconcagua, 
                            el más alto del continente americano. Es un centro cosmopolita por ser paso obligado de los vuelos entre Buenos Aires y Santiago de Chile. 
                            Su cercanía a la Cordillera de los Andes, la convierte en un destino inmejorable para el turismo aventura: trekking, rafting, montañismo 
                            y espectaculares paisajes para realizar safaris fotográficos, entre otras actividades. Otras posibilidades para el turista son la práctica 
                            del esquí en invierno, y el termalismo en cualquier época del año.</p>
                        {/* <p> {Description}</p> */}
                        <Link to= '/packages'>
                        <div className={styles.citybuttons}>
                            <button type="button" class="btn btn-outline-secondary btn-lg">View all Packages</button>
                        </div>
                            </Link>
                    </div>
                </div>
            </div>

        </div>
    );

}