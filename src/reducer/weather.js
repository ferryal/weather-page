import { IPSTACK } from '../actions/ActionTypes';

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
    default:
      return state;
  }
};
