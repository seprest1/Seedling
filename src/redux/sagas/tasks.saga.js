import axios from 'axios';
import { actionChannel, put, takeEvery } from 'redux-saga/effects';

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

  function* addTask(action){
    try{
      console.log('Task:', action.payload);
      yield axios({
        method: 'POST',
        url: '/tasks', 
        data: { user: action.payload.user, task: action.payload.task }
      });
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