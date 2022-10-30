import axios from 'axios';
import { put, takeLatest, select } from 'redux-saga/effects';

const delay = (ms) => new Promise(res => setTimeout(res, ms));
// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/user', config);
    yield put({ type: 'SET_USER', payload: response.data });

    //waits for user to be set
    yield delay(1000); 
    const user = yield select(store => store.user);

    //get initial values for user and set them to local state
    yield put({ type: "GET_USER_PLOTS", payload: user.id });
    yield put({ type: "FETCH_TASKS", payload: user.id });
    yield put({ type: 'FETCH_TIPS', payload: user.id });
    yield put({type: 'FETCH_PLANTS'});
    //yield put({ type: 'FETCH_WEATHER', payload: user.weather_key });

  } catch (error) {
    console.log('User get request failed', error);
  };
};

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
}

export default userSaga;
