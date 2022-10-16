import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* weatherSaga() {
    yield takeEvery('FETCH_WEATHER', fetchLocation);
  }

function* fetchLocation(action){
    try{
        console.log(action.payload);
        const zipcode = action.payload;
        yield axios({
            method: 'GET',
            url: `/weather/location?zip=${zipcode}`});
    }
    catch(error){
        console.log('fetchLocation failed:', error);
    }
}
  
export default weatherSaga;