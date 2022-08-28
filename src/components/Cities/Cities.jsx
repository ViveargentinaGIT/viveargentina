// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import CarouselCity from '../Carousel/Carousel.City';
import City from '../City/City'
import Navbar from '../navbar/navBar';
import SearchBar from  '../SearchBar/SearchBar';
import styles from '../Cities/Cities.module.css';


export default function Card() {

    return (
        <div class="container-fluid">
  
            <Navbar/>
            <SearchBar/>
            <br/>
      
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" className={styles.city01} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        MENDOZA
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <City/>
                                        </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" className={styles.city02} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        BUENOS AIRES
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Descubra las bellezas de Buenos Aires con nuestro programa de 3 noches en la Capital de Argentina, también conocida como la "París latinoamericana". Conoceremos lugares de gran valor histórico, atractivos y pasearemos por las hermosas calles del centro de la ciudad, así como presenciar un impresionante Show de Tango. A unas horas de Buenos Aires encontraremos y exploramos el Delta de Tigre en donde desemboca el famoso Río de la Plata, un atractivo único por sus islotes, paseos en barco, naturaleza y actividades al aire libre.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" className={styles.city03} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        CÓRDOBA
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">La provincia de Córdoba es el destino ideal para todo tipo de pasajeros y para todos los intereses. Su mayor atracción es el entorno serrano, con numerosos deportes, actividades y paseos relacionados con el turismo aventura. Lugares que se pueden disfrutar durante todo el año.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading4">
                                    <button class="accordion-button collapsed" className={styles.city04} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                                        SALTA
                                    </button>
                                </h2>
                                <div id="flush-collapse4" class="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Cuando te preguntas qué hacer en Salta y Jujuy, la respuesta siempre será, conocer los mejores paisajes. Destinos como Cafayate y sus bodegas, Humahuaca, Tilcara y Purmamarca con su historia milenaria y paisajes de ensueño, no dejarán de sorprenderte. Estas provincias se encuentran a los pies de la Cordillera de los Andes, cuentan con una belleza particular de desolación y aridez mágica. Es posible también, encontrar entre sus ciudades y pequeñas aldeas el toque indígena que no se disuelve ni con el paso del tiempo. Con nuestro paquete turístico a Salta y Jujuy clásico, podrá conocer sus bellezas de estos destinos en un programa de 3 noches. Descubra la ciudad de Salta y asómbrate con increíbles paisajes a través de este viaje único al norte de Argentina.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading5">
                                    <button class="accordion-button collapsed" className={styles.city05} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                                        BARILOCHE
                                    </button>
                                </h2>
                                <div id="flush-collapse5" class="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Cuando te preguntas qué hacer en Salta y Jujuy, la respuesta siempre será, conocer los mejores paisajes. Destinos como Cafayate y sus bodegas, Humahuaca, Tilcara y Purmamarca con su historia milenaria y paisajes de ensueño, no dejarán de sorprenderte. Estas provincias se encuentran a los pies de la Cordillera de los Andes, cuentan con una belleza particular de desolación y aridez mágica. Es posible también, encontrar entre sus ciudades y pequeñas aldeas el toque indígena que no se disuelve ni con el paso del tiempo. Con nuestro paquete turístico a Salta y Jujuy clásico, podrá conocer sus bellezas de estos destinos en un programa de 3 noches. Descubra la ciudad de Salta y asómbrate con increíbles paisajes a través de este viaje único al norte de Argentina.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="row">
                    <div class="col-md-12">
                        <iframe width="95%" height="615" src="https://www.youtube.com/embed/BDZtDJpIsiw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div> */}
            </div>

        </div>
    );

}