import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* weatherSaga() {
    yield takeEvery('FETCH_WEATHER', fetchWeather);
  }

function* fetchWeather(action){
    try{
        const key = action.payload.weather_key;
        const response = yield axios({
            method: 'GET',
            url: `/weather/location?key=${key}`});
        const weatherData = response.data[0];
        console.log(weatherData);
        // yield put({ type: 'SET_WEATHER', payload: weatherData });
    }
    catch(error){
        console.log('fetchWeather failed:', error);
    }
}
  
export default weatherSaga;