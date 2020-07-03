import axios from 'axios';
import config from '../config';
import publicIp from 'public-ip';
import { IPSTACK, WEATHER } from './ActionTypes';

function loading() {
  return {
    type: IPSTACK.LOADING
  };
}

function fetchSuccess(data) {
  return {
    type: IPSTACK.FETCH_SUCCESS,
    payload: { data }
  };
}

function fetchFailed() {
  return {
    type: IPSTACK.FETCH_FAILED
  };
}

function fetchSuccessWeather(data) {
  return {
    type: WEATHER.FETCH_WEATHER_SUCCESS,
    payload: {data}
  };
}

function fetchFailedWeather() {
  return {
    type: WEATHER.FETCH_WEATHER_FAILED
  }
}

export function fetchIP() {
  return (dispatch) => {
    dispatch(loading());
    publicIp.v4().then(ip => {
      axios.get(`${config.apiUrl}/${ip}?access_key=${config.apiKey}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        if (res.status === 200) {
          let response = res.data;
          dispatch(fetchSuccess(response));
          this.fetchWeather(response.city, response.country_name);
        } else {
          dispatch(fetchFailed());
        }
      }).catch(() => {
        dispatch(fetchFailed());
      });
    });
  };
}

export function fetchWeather(city, country) {
  return (dispatch) => {
    axios.get(`${config.apiUrlWeather}/weather?q=${city},${country}&appid=${config.apiKeyWeather}&units=metric`,{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.status === 200) {
        const response = res.data;
        dispatch(fetchSuccessWeather(response));
      } else {
        dispatch(fetchFailedWeather());
      }
    }).catch(() => {
      dispatch(fetchFailedWeather());
    })
  }
}
