import { GET_CITY_BY_ID, GET_ALL_CITIES } from "./action";
  
  const initialState = {
    cityById: {},
    allCities: []
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
      default:
        return state;
    }
  }