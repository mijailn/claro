import ax from 'axios';

const apiUrl = process.env.REACT_APP_API;
const apiDetalle = process.env.REACT_APP_API_DETALLE;

export const GET_CATEGORIA = 'home/GET_CATEGORIA';
export const GET_PELICULA = 'home/GET_PELICULA';
export const FILTER = 'home/FILTER';

const initialState = {
  peliculas: [],
  pelicula: {},
  filter: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIA:
      return {
        ...state,
        peliculas: action.payload.groups
      };
    case GET_PELICULA:
      return {
        ...state,
        pelicula: action.payload.group
      };
    case FILTER:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

export const getPeliculas = categoria => {
  return dispatch => {
    return ax.get(`${apiUrl}`).then(({ data }) => {
      dispatch({
        type: GET_CATEGORIA,
        payload: data.response
      });
    });
  };
};
export const getPelicula = id => {
  return dispatch => {
    return ax.get(`${apiDetalle}&group_id=${id}`).then(({ data }) => {
      dispatch({
        type: GET_PELICULA,
        payload: data.response
      });
    });
  };
};
export const filter = name => {
  return dispatch => {
    dispatch({
      type: FILTER,
      payload: name
    });
  };
};
