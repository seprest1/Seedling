import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import garden from './garden.reducer';
import tasks from './tasks.reducer';
import weather from './weather.reducer';
import tips from './tips.reducer';

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  garden,
  tasks,
  weather,
  tips,
});

export default rootReducer;
