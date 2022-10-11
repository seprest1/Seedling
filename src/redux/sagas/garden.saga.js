import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* gardenSaga() {
    yield takeLatest('FETCH_PLANTS', fetchPlants);
  }
  
function* fetchPlants(){
    try{
        const plants = yield axios.get('/garden/plants');
        console.log('Get plants:', plants.data);
        yield put({ type: 'SET_PLANTS', payload: plants.data });
    }                       //set plant reducer to list of plants
    catch(error){
        console.log('fetchPlants failed', error);
    };
};


export default gardenSaga;