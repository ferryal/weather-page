import { IPSTACK, WEATHER } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  publicIP: {},
  weather: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IPSTACK.LOADING:
      return {
        ...state,
        loading: true
      };
    case IPSTACK.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
				publicIP: action.payload.data
      };
    case IPSTACK.FETCH_FAILED:
      return {
        ...state,
        loading: false
      };
    case WEATHER.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload.data
      };
    case WEATHER.FETCH_WEATHER_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
