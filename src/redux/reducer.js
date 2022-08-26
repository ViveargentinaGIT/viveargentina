import { GET_BY_NAME } from "./action";
  
  const initialState = {
    array: [],
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_BY_NAME:
      return {
        ...state,
        city: action.payload,
      };
      default:
        return state;
    }
  }