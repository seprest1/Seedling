import { put, takeEvery } from 'redux-saga/effects';
import { useSelector } from 'react-redux';
import axios from 'axios';

function* gardenSaga() {
    yield takeEvery('FETCH_PLANTS', fetchPlants);
    yield takeEvery('SEND_PLOT', addPlot);
    yield takeEvery('GET_PLOT', fetchPlot);
    yield takeEvery('DELETE_PLOT', deletePlot);
    yield takeEvery('EDIT_PLOT', ammendPlot);
  }

//fetch list of available plants from DB
function* fetchPlants(){
    try{
        const plants = yield axios.get('/garden/plants');
        yield put({ type: 'SET_PLANTS', payload: plants.data });
    }                       //set plant reducer to list of plants
    catch(error){
        console.log('fetchPlants failed', error);
    };
};

//add plot with all the divs to DB
function* addPlot(action){
    try{
        console.log('Plot being added', action.payload);
        const plot = yield axios({
            method: 'POST',
            url: '/garden/add_plot', 
            data: action.payload
        });
    }
    catch(error){
        console.log('addPlot failed,', error);
    };
};

//fetch user's plot from DB
function* fetchPlot(action){
    try{
        const userId = action.payload;
        const userPlot = yield axios.get(`/garden/${userId}/plot/`);
        const response = userPlot.data;
        console.log('The response from fetchPlot:', response);

        //Pulls only needed values from DB to set plot
        const plot = response.map(obj => ({ 
            plant_id: obj.plant_id, 
            location: obj.location, 
            name: obj.name, 
            subvariety: obj.subvariety, 
            shade: obj.shade,
            color: obj.color,
            icon: obj.icon }));
        const plotId = response[0].plot_id; 

        const removedDuplicates = response.filter((oldDiv, index, response) => 
            response.findIndex(
            (newDiv) =>  {return (newDiv.name === oldDiv.name && newDiv.subvariety === oldDiv.subvariety)}) === index);

        const selectedPlants = removedDuplicates.map(div => 
            ({id: div.plant_id, 
              name: div.name, 
              shade: div.shade, 
              color: div.color, 
              subvariety: div.subvariety,
              icon: div.icon }));

        console.log(selectedPlants);

        yield put({ type: 'SET_PLOT', payload: plot });
        yield put({ type: 'SET_MONTH', payload: response[0].month });
        yield put({ type: 'SET_PLOT_ID', payload: plotId });
        yield put({ type: 'SET_SELECTED_PLANTS', payload: selectedPlants });
    }               
    catch(error){
        console.log('fetchPlot failed:', error);
    };
};

//edit user's plot
function* ammendPlot(action){
   try{
        const plot_id = action.payload.plot_id;
        const plot = action.payload.plot;
        console.log(plot_id);
        yield axios({ 
            method: 'PUT',
            url: `/garden/${plot_id}`, 
            data: plot 
        });
        yield put({ type: 'CLEAR_EVERTYHING' });
   }
   catch(error){
        console.log('ammendPlot failed:', error);
   }
}

//delete user's plot
function* deletePlot(action){
    try{
        const plotId = action.payload;
        yield axios.delete(`/garden/${plotId}`);
        yield put({ type: 'FETCH_PLOT '});         
    }
    catch(error){
        console.log('deletePlot failed:', error);
    }
}

export default gardenSaga;