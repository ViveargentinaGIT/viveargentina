import { GET_ALL } from "./action";
  
  const initialState = {
    array: [],
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL:
        return {
          ...state,
          array: []
        };
      default:
        return state;
    }
  }
  