import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* tasksSaga() {
    yield takeEvery('FETCH_TASKS', fetchTasks);
    yield takeEvery('ADD_TASK', addTask);
    yield takeEvery('COMPLETED_TASK', updateTask);
    yield takeEvery('DELETE_TASK', deleteTask);
  }

  function* fetchTasks(){
    try{

    }
    catch(error){

    };
  };

  function* addTask(){
    try{

    }
    catch(error){

    };
  };

  function* updateTask(){
    try{

    }
    catch(error){

    };
  };
  
  function* deleteTask(){
    try{

    }
    catch(error){

    };
  };

  export default tasksSaga;