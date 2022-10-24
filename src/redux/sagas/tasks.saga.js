import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* tasksSaga() {
    yield takeEvery('FETCH_TASKS', fetchTasks);
    yield takeEvery('ADD_TASK', addTask);
    yield takeEvery('COMPLETED_TASK', updateTask);
    yield takeEvery('DELETE_TASK', deleteTask);
  }

  function* fetchTasks(action){
    try{
        const response = yield axios.get(`/tasks/${action.payload}`);
        const taskList = response.data;
        yield put({ type: 'SET_TASKS', payload: taskList });
    }
    catch(error){
      console.log('Error in fetchTasks Saga function,', error);
    };
  };

  function* addTask(action){
    try{
      console.log('Task:', action.payload);
      const user = action.payload.user;
      const task = action.payload.task;
      yield axios({
        method: 'POST',
        url: '/tasks', 
        data: { user, task }
      });

      yield put({ type: 'FETCH_TASKS', payload: user });
    }
    catch(error){
      console.log('Error in addTask Saga function,', error);
    };
  };

  function* updateTask(action){
    try{
      const task_id = action.payload.id;
      const user = action.payload.user;
      yield axios.put(`/tasks/${task_id}`);
      yield put({ type: 'FETCH_TASKS', payload: user })
    }
    catch(error){
      console.log('Error in updateTask Saga function,', error);
    };
  };
  
  function* deleteTask(action){
    try{
      const task_id = action.payload.id;
      const user = action.payload.user;
      yield axios.delete(`/tasks/${task_id}`);
      yield put({ type: 'FETCH_TASKS', payload: user })
    }
    catch(error){
      console.log('Error in deleteTask Saga function,', error);
    };
  };

  export default tasksSaga;