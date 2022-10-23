import axios from 'axios';
import { object } from 'prop-types';
import { put, takeEvery } from 'redux-saga/effects';

function* tipsSaga() {
    yield takeEvery('FETCH_TIPS', fetchTips);
  }

function* fetchTips(){
    try{
        const tips = yield axios.get(`/tips`);
        const tipText = tips.data.map(item => item.tip);
        yield put({ type: 'SET_TIPS', payload: tipText });
    }
    catch(error){
        console.log('fetchTips failed:', error);
    }
}
  
export default tipsSaga;