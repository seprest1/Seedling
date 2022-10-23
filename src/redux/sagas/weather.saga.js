import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* weatherSaga() {
    yield takeEvery('FETCH_WEATHER', fetchWeather);
  }

function* fetchWeather(action){
    try{
        const zipcode = action.payload;
        const response = yield axios({
            method: 'GET',
            url: `/weather/location?zip=${zipcode}`});
        const weatherData = response.data[0];
        console.log(weatherData);
        // yield put({ type: 'SET_WEATHER', payload: weatherData });
    }
    catch(error){
        console.log('fetchWeather failed:', error);
    }
}
  
export default weatherSaga;