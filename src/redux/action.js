// import axios from "axios";
export const GET_ALL = "GET ALL";

export function obtener() {
  return async function pedido(dispatch) {
    let aux = [];
    return dispatch({
      type: GET_ALL,
      payload: aux.data,
    });
  };
}
