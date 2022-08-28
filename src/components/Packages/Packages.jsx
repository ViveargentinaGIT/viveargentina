// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import CarouselPackage from '../Carousel/Carousel.Package'
import styles from '../Packages/Packages.module.css';
import Navbar from '../navbar/navBar';
import SearchBar from '../SearchBar/SearchBar';
import FilterPackages from '../../components/Filters/FilterPackages'


export default function Card() {

    return (
        <div>
            <div class="container-fluid">
                <Navbar />
                <SearchBar />
                <FilterPackages/>
                <br />

                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2>MENDOZA CLÁSICO</h2>
                            <h4>The land of sun and good wine</h4>
                            <ul className={styles.scorecity}>
                                <li><i class="bi bi-star-fill" Style="color:#C49D48"></i></li>
                                <li><i class="bi bi-star-fill" Style="color:#C49D48"></i></li>
                                <li><i class="bi bi-star-fill" Style="color:#C49D48"></i></li>
                                <li><i class="bi bi-star-fill" Style="color:#C49D48"></i></li>
                                <li><i class="bi bi-star"></i></li>
                            </ul>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum aliquam doloribus optio. Molestiae, alias non illo possimus itaque quis labore fugit a earum est quidem ducimus, omnis praesentium. Quasi, ipsum.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum aliquam doloribus optio. Molestiae, alias non illo possimus itaque quis labore fugit a earum est quidem ducimus, omnis praesentium. Quasi, ipsum.</p>
                            <ul className={styles.iconscity}>
                                <li><i class="bi bi-clock-history"></i> 6 hs.</li>
                                <li><i class="bi bi-currency-dollar"></i> 00.000</li>
                            </ul>
                            <div className={styles.citybuttons}>
                                <button type="button" class="btn btn-outline-secondary btn-lg"><i class="bi bi-cart-check"></i> I want it!</button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <CarouselPackage />
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div className={styles.itinerary}>
                    <h3 class="text-center">ITINERARY</h3>
                </div>
            </div>

            <div class="container">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <i class="bi bi-calendar-check"> </i>&nbsp; Day 1
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Recepción a su llegada en avión en el Aeropuerto de Mendoza y traslado al hotel con guía en español. Alojamiento: Hotel seleccionado en habitaciones estándar con desayuno incluido por 03 noches.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <i class="bi bi-calendar-check"> </i>&nbsp; Day 2
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Excursión Regular de Medio día Visita a Bodegas con guía en español. Estos circuitos entre viñedos se desarrollan en los departamentos de Luján de Cuyo y Maipú. Tomaremos contacto con la cultura del trabajo en manos de inmigrantes que, utilizando técnicas de irrigación (canales y acequias) heredadas de los antiguos aborígenes, los Huarpes, lograron transformar el suelo desértico en un gran oasis productivo. Es el escenario del asentamiento de prestigiosas bodegas, que han posicionado por la calidad de sus productos, a la Argentina en privilegiado productor a nivel internacional.</p>
                                <p>Visitaremos dos establecimientos vitivinícolas, con métodos tradicionales e incorporación de última tecnología, dónde acompañados por guías de bodegas o expertos en enología, nos mostrarán los métodos de vinificación y los procesos de elaboración, embotellado y etiquetado de los vinos. Posteriormente, realizaremos una degustación.Algunas de las bodegas que se visitan en las excursiones regulares son: Vistandes, López,Viniterra,Cavas Don Arturo, Carmine Granata, Cavas de Weinert. También realizaremos una visita a un establecimiento olivícola, donde observaremos el proceso de elaboración del aceite de oliva y luego nos brindarán una degustación.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <i class="bi bi-calendar-check"> </i>&nbsp; Day 3
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Excursión Regular de día completo Alta Montaña con guía en español. El recorrido ofrece una variada gama de colores y relieves. A primera hora de la mañana, bordeando el río Mendoza, obtendremos unas vistas majestuosas de la cadena montañosa Cordón del Plata y el Dique Potrerillos, colosal obra hidráulica para generar energía y distribuir aguas para el riego. Nuestra próxima visita será Uspallata, asentamiento prehispánico de aborígenes Huarpes y el punto más austral del Imperio Inca, hasta dónde llegaba el Camino del Inca desde el Perú.</p>
                                <p>Más adelante, encontraremos a orillas de nuestro recorrido, el Puente del Inca, obra arquitectónica natural con vertientes de aguas termales.
                                    Continuando nuestro rumbo y a 2750 msnm, el mirador del Cerro Aconcagua, el coloso de América de 6959 metros, desde dónde se accede a la Laguna Horcones y al Parque Provincial Aconcagua. Siguiendo la ruta internacional llegaremos a nuestro último destino, la villa Las Cuevas, de estilo europeo ubicada a 3200 msnm. Entre Las Cuevas y el túnel internacional, se halla la ruta que permite ascender hasta el Monumento Cristo Redentor, emplazado a 4200 msnm, que simboliza la unión entre los argentinos y chilenos. (Acceso habilitado sólo en verano).</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.separator}></div>

                <div className={styles.citybuttons}>
                    <button type="button" class="btn btn-outline-secondary btn-lg">View + Packages</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg"><i class="bi bi-cart-check"></i> I want it!</button>
                </div>

                <div className={styles.separator}></div>

            </div>


        </div>
    );

}