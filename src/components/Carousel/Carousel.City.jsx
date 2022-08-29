// import React, { Fragment, useState, useEffect } from "react";
// import { useDispatch, useSelector} from "react-redux";
// import { getAllCities } from "../../redux/action";


export default function CarouselCity(city) {


        // const dispatch = useDispatch();
        // const allCities = useSelector((state) => state.allCities);
      
        // useEffect(() => {
        //   dispatch(getAllCities());
        // }, [dispatch]);
        
        // const { image } = city;

        // console.log(image)

    return (
        <div class="container-fluid">

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b5/a8/02/aconcagua-32-largejpg.jpg?w=1200" class="d-block w-100" alt="Mendoza"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b5/a8/02/aconcagua-32-largejpg.jpg?w=1200" class="d-block w-100" alt="Mendoza"/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b5/a8/02/aconcagua-32-largejpg.jpg?w=1200" class="d-block w-100" alt="Mendoza"/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}