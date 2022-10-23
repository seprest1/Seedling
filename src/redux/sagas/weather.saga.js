import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* weatherSaga() {
    yield takeEvery('FETCH_WEATHER', fetchWeather);
  }

function* fetchWeather(action){
    try{
        const key = action.payload;
        const response = yield axios({
            method: 'GET',
            url: `/weather/location?key=${key}`});
        const weatherData = response.data[0];

        yield put({ type: 'SET_WEATHER', 
            payload: {
                text: weatherData.WeatherText,
                temp: weatherData.Temperature.Imperial.Value,
                icon: weatherData.WeatherIcon } 
        });
    }
    catch(error){
        console.log('fetchWeather failed:', error);
    }
}
  
export default weatherSaga;