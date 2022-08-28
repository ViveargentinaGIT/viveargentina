import axios from "axios";

export const GET_CITY_BY_NAME = "GET_CITY_BY_NAME";
export const GET_CITY_BY_ID = "GET_CITY_BY_ID";
export const GET_ALL_CITIES = "GET_ALL_CITIES";
export const GET_ALL_PACKAGES = "GET_ALL_PACKAGES";

// Esta ruta trae una ciudad que incluye un array con todos sus paquetes. 
// Se pasa el name,tal vez en un searchbar
export function getCitiesByName(nameCities) {
  return async function (dispatch) {
    let aux = await axios.get(`https://viveargentina.herokuapp.com/cities?name=${nameCities}`);
    return dispatch({
      type: GET_CITY_BY_NAME,
      payload: aux.data,
    });
  };
}

// Esta ruta trae una ciudad que incluye un array con todos sus paquetes. 
// Se pasa el id,tal vez en el city detail
export function getCitiesById(cityId) {
  return async function (dispatch) {
    let aux = await axios.get(`https://viveargentina.herokuapp.com/cities/${cityId}`);
    return dispatch({
      type: GET_CITY_BY_ID,
      payload: aux.data,
    });
  };
}

// Esta ruta trae un array con todas las ciudades. Creo que se usa en el home
export function getAllCities() {
  return async function (dispatch) {
    let aux = await axios.get(`https://viveargentina.herokuapp.com/cities`);
    return dispatch({
      type: GET_ALL_CITIES,
      payload: aux.data,
    });
  };
}

// Esta ruta trae un array con todos los paquetes. Creo que se usa en el coponente paquetes
export function getAllPackages() {
  return async function (dispatch) {
    let aux = await axios.get(`https://viveargentina.herokuapp.com/packages`);
    return dispatch({
      type: GET_ALL_PACKAGES,
      payload: aux.data,
    });
  };
}
