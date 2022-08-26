import axios from "axios";

export const GET_BY_NAME = "GET BY NAME";

export function getCitiesByName(nameCities) {
  return async function (dispatch) {
    let aux = await axios.get(`http://localhost:3001/cities?name=${nameCities}`);
    return dispatch({
      type: GET_BY_NAME,
      payload: aux.data,
    });
  };
}
