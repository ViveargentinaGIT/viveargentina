import { GET_CITY_BY_ID, GET_ALL_CITIES, ORDER_PACKAGES, GET_ALL_PACKAGES } from "./action";
  
  const initialState = {
    cityById: {},
    allCities: [],
    packagesToRender: [],
    allPackages: []
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CITY_BY_ID:
        return {
          ...state,
          cityById: action.payload,
          allPackages: action.payload.packages
        };
      case GET_ALL_CITIES:
        return {
          ...state,
          allCities: action.payload
        }
      case GET_ALL_PACKAGES:
        return {
          ...state,
          allPackages: action.payload,
          packagesToRender: action.payload
        }
      case ORDER_PACKAGES:
        let packagesOrdered

            if(action.payload === 'sort') packagesOrdered = state.allPackages;
            if(action.payload === 'ascendant by name') {
              packagesOrdered = state.allPackages.sort(function(a, b) {

                    if(a.name > b.name) return 1;
                    else if(a.name < b.name) return -1;
                    else return 0;
                })} 
            else if(action.payload === 'descendant by name') {

              packagesOrdered = state.allPackages.sort(function(a, b) {

                    if(a.name > b.name) return -1;
                    else if(a.name < b.name) return 1;
                    else return 0;
                })} 
            else if(action.payload === 'ascendant by price') {

              packagesOrdered = state.allPackages.sort(function(a, b) {
                    return a.price - b.price;
                })}
            else if(action.payload === 'descendant by price') {
              packagesOrdered = state.allPackages.sort(function(a, b) {
                    return b.price - a.price;
                })}
            else if(action.payload === 'ascendant by score') {
              packagesOrdered = state.allPackages.sort(function(a, b) {
                    return a.score - b.score;
                })}
            else if(action.payload === 'descendant by score') {
              packagesOrdered = state.allPackages.sort(function(a, b) {

                    return b.score - a.score;
                })}
        return {
          ...state,
          allPackages: packagesOrdered
        }
      default:
        return state;
    }
  }