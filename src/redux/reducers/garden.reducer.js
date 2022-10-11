import { combineReducers } from 'redux';

const plants = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLANTS':
            return action.payload;
        default:
            return state;
    };
};


export default combineReducers({
    plants,
  });