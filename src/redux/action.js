import axios from "axios";

export const GET_CITIES_BY_NAME = "GET_CITIES_BY_NAME";
export const GET_CITY_BY_ID = "GET_CITY_BY_ID";
export const GET_ALL_CITIES = "GET_ALL_CITIES";
export const GET_ALL_PACKAGES = "GET_ALL_PACKAGES";
export const GET_PACKAGES_BY_NAME = "GET_PACKAGES_BY_NAME";
export const GET_PACKAGE_BY_ID = "GET_PACKAGE_BY_ID";
export const GET_ALL_EXPERIENCES = "GET_ALL_EXPERIENCES";
export const GET_EXPERIENCES_BY_NAME = "GET_EXPERIENCES_BY_NAME";
export const GET_EXPERIENCE_BY_ID = "GET_EXPERIENCE_BY_ID";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_CATEGORY_BY_ID = "GET_CATEGORY_BY_ID";
export const GET_ALL_REGIONS = "GET_ALL_REGIONS";
export const GET_REGION_BY_ID = "GET_REGION_BY_ID";


// Esta ruta trae una ciudad que incluye un array con todos sus paquetes. 
// Se pasa el name,tal vez en un searchbar
export function getCitiesByName(cityName) {
  console.log('City name en actions:', cityName)
  return async function (dispatch) {
    let citiesByName = await axios.get(`https://viveargentina.herokuapp.com/cities?name=${cityName}`);
    return dispatch({
      type: GET_CITIES_BY_NAME,
      payload: citiesByName.data,
    });
  };
}

// Esta ruta trae una ciudad que incluye un array con todos sus paquetes. 
// Se pasa el id,tal vez en el city detail
export function getCityById(cityId) {
  return async function (dispatch) {
    let cityById = await axios.get(`https://viveargentina.herokuapp.com/cities/${cityId}`);
    return dispatch({
      type: GET_CITY_BY_ID,
      payload: cityById.data,
    });
  };
}

// Esta ruta trae un array con todas las ciudades. Creo que se usa en el home
export function getAllCities() {
  return async function (dispatch) {
    let allCities = await axios.get(`https://viveargentina.herokuapp.com/cities`);
    return dispatch({
      type: GET_ALL_CITIES,
      payload: allCities.data,
    });
  };
}

// Esta ruta trae un array con todos los paquetes. Creo que se usa en el coponente paquetes
export function getAllPackages() {
  return async function (dispatch) {
    let allPackages = await axios.get(`https://viveargentina.herokuapp.com/packages`);
    return dispatch({
      type: GET_ALL_PACKAGES,
      payload: allPackages.data,
    });
  };
}

// Esta ruta trae un paquete que incluye un array con todas sus experiencias. 
// Se pasa el name, tal vez en un searchbar
export function getPackagesByName(packageName) {
  return async function (dispatch) {
    let packagesByName = await axios.get(`https://viveargentina.herokuapp.com/packages?name=${packageName}`);
    return dispatch({
      type: GET_PACKAGES_BY_NAME,
      payload: packagesByName.data,
    });
  };
}

// Esta ruta trae un paquete que incluye un array con todas sus experiencias. 
// Se pasa el id, tal vez en el package detail
export function getPackageById(packageId) {
  return async function (dispatch) {
    let packageById = await axios.get(`https://viveargentina.herokuapp.com/packages/${packageId}`);
    return dispatch({
      type: GET_PACKAGE_BY_ID,
      payload: packageById.data,
    });
  };
}

// Esta ruta trae un array con todas las experiencias.
export function getAllExperiences() {
  return async function (dispatch) {
    let allExperiences = await axios.get(`https://viveargentina.herokuapp.com/experiences`);
    return dispatch({
      type: GET_ALL_EXPERIENCES,
      payload: allExperiences.data,
    });
  };
}

// Esta ruta trae una experiencia. 
// Se pasa el name, tal vez en un searchbar
export function getExperiencesByName(experienceName) {
  return async function (dispatch) {
    let experiencesByName = await axios.get(`https://viveargentina.herokuapp.com/experiences?name=${experienceName}`);
    return dispatch({
      type: GET_EXPERIENCES_BY_NAME,
      payload: experiencesByName.data,
    });
  };
}

// Esta ruta trae una experiencia por id. 
export function getExperienceById(experienceId) {
  return async function (dispatch) {
    let experienceById = await axios.get(`https://viveargentina.herokuapp.com/experiences/${experienceId}`);
    return dispatch({
      type: GET_EXPERIENCE_BY_ID,
      payload: experienceById.data,
    });
  };
}

// Esta ruta trae un array con todas las categorias.
export function getAllCategories() {
  return async function (dispatch) {
    let allCategories = await axios.get(`https://viveargentina.herokuapp.com/categories`);
    return dispatch({
      type: GET_ALL_CATEGORIES,
      payload: allCategories.data,
    });
  };
}

// Esta ruta trae una categoría que incluye un array con todas sus experiencias. 
// Se pasa el id, tal vez se manda de un botón de filtro
export function getCategoryById(categoryId) {
  return async function (dispatch) {
    let categoryById = await axios.get(`https://viveargentina.herokuapp.com/categories/${categoryId}`);
    return dispatch({
      type: GET_CATEGORY_BY_ID,
      payload: categoryById.data,
    });
  };
}

// Esta ruta trae un array con todas las regiones.
export function getAllRegions() {
  return async function (dispatch) {
    let allRegions = await axios.get(`https://viveargentina.herokuapp.com/regions`);
    return dispatch({
      type: GET_ALL_REGIONS,
      payload: allRegions.data,
    });
  };
}

// Esta ruta trae una region que incluye un array con todas sus ciudades. 
// Se pasa el id, tal vez se manda de un botón de filtro.
export function getRegionById(regionId) {
  return async function (dispatch) {
    let regionById = await axios.get(`https://viveargentina.herokuapp.com/regions/${regionId}`);
    return dispatch({
      type: GET_REGION_BY_ID,
      payload: regionById.data,
    });
  };
}
