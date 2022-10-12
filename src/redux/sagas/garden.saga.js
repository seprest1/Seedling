import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* gardenSaga() {
    yield takeEvery('FETCH_PLANTS', fetchPlants);
    yield takeEvery('SEND_PLOT', addPlot);
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

function* addPlot(action){
    try{
        console.log('Plot being added', action.payload);
        const plot = yield axios({
            method: 'POST',
            url: '/garden/add_plot', 
            data: action.payload
        });
        yield put({ type: 'CLEAR_PLOT' });
    }
    catch(error){
        console.log('addPlot failed,', error);
    };
};


export default gardenSaga;