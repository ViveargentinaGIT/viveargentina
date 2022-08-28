import { GET_CITY_BY_ID, GET_ALL_CITIES, ORDER_PACKAGES } from "./action";
  
  const initialState = {
    cityById: {},
    allCities: [],
    packages: []
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CITY_BY_ID:
        return {
          ...state,
          cityById: action.payload,
        };
      case GET_ALL_CITIES:
        return {
          ...state,
          allCities: action.payload
        }
      case ORDER_PACKAGES:
        let packagesOrdered
            if(payload === 'sort') packagesOrdered = state.packages;
            if(payload === 'ascendant by name') {
              packagesOrdered = state.packages.sort(function(a, b) {
                    if(a.name > b.name) return 1;
                    else if(a.name < b.name) return -1;
                    else return 0;
                })} 
            else if(payload === 'descendant by name') {
              packagesOrdered = state.packages.sort(function(a, b) {
                    if(a.name > b.name) return -1;
                    else if(a.name < b.name) return 1;
                    else return 0;
                })} 
            else if(payload === 'ascendant by price') {
              packagesOrdered = state.packages.sort(function(a, b) {
                    return a.price - b.price;
                })}
            else if(payload === 'descendant by price') {
              packagesOrdered = state.packages.sort(function(a, b) {
                    return b.price - a.price;
                })}
            else if(payload === 'ascendant by score') {
              packagesOrdered = state.packages.sort(function(a, b) {
                    return a.score - b.score;
                })}
            else if(payload === 'descendant by score') {
              packagesOrdered = state.packages.sort(function(a, b) {
                    return b.score - a.score;
                })}
        return {
          ...state,
          packages: packagesOrdered
        }
      default:
        return state;
    }
  }