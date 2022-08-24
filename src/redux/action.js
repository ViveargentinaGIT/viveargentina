// import axios from "axios";
export const GET_ALL = "GET ALL";

export function get() {
  return async function order(dispatch) {
    let aux = [];
    return dispatch({
      type: GET_ALL,
      payload: aux.data,
    });
  };
}
