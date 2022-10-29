import { put, takeEvery, select } from 'redux-saga/effects';
import axios from 'axios';
import moment from 'moment';

function* gardenSaga() {
    yield takeEvery('FETCH_PLANTS', fetchPlants);
    yield takeEvery('SEND_PLOT', addPlot);
    yield takeEvery('GET_PLOT', fetchPlot);
    yield takeEvery('DELETE_PLOT', deletePlot);
    yield takeEvery('EDIT_PLOT', ammendPlot);
    yield takeEvery('GET_USER_PLOTS', fetchUserPlots);
    yield takeEvery('SET_NOTES', addNotes);
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
    const user = yield select(store => store.user.id);

    try{
        console.log('Plot being added', action.payload);
        yield axios({
            method: 'POST',
            url: '/garden/add_plot', 
            data: action.payload
        });
        yield put({ type: 'CLEAR_EVERYTHING' });
        yield put({ type: 'GET_USER_PLOTS', payload: user });

    }
    catch(error){
        console.log('addPlot failed,', error);
    };
};

//fetch user's plot from DB
function* fetchPlot(action){
    try{
       
        const plot_id = action.payload;
        const userPlot = yield axios.get(`/garden/plot/${plot_id}`);
        const response = userPlot.data;

        //Pulls only needed values from DB to set plot
        const plot = response.map(obj => ({ 
            plant_id: obj.plant_id, 
            location: obj.location, 
            name: obj.name, 
            subvariety: obj.subvariety, 
            shade: obj.shade,
            color: obj.color,
            icon: obj.icon }));

        //sets the date with accurate display
        const month = response[0].month;
        const year = response[0].year;
        const display = moment().month(month-1).format('MMMM');

        //removes duplicates, in order to set plant list in edit plot
        const removedDuplicates = response.filter((oldDiv, index, response) => 
            response.findIndex(
            (newDiv) =>  {return (newDiv.name === oldDiv.name && newDiv.subvariety === oldDiv.subvariety)}) === index);

        //what will be the plant list in edit plot
        const selectedPlants = removedDuplicates.map(div => 
            ({id: div.plant_id, 
              name: div.name, 
              shade: div.shade, 
              color: div.color, 
              subvariety: div.subvariety,
              icon: div.icon }));

        //plot notes
        const notes = response[0].notes;

        yield put({ type: 'SET_PLOT', payload: plot });
        yield put({ type: 'SET_DATE', payload: {month, year, display} });   
        yield put({ type: 'SET_PLOT_INFO', payload: {id: plot_id, notes: notes} });
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
        console.log(action.payload);
        const plot = action.payload.plot;
        const user = action.payload.user;
        yield axios.delete(`/garden/plot/${plot}`);
        yield put({ type: 'CLEAR_EVERYTHING' });
        yield put({ type: 'GET_USER_PLOTS', payload: user });      
    }
    catch(error){
        console.log('deletePlot failed:', error);
    };
};


//get ids and dates of all user's plots
function* fetchUserPlots(action){
    try{
        //get all plots from user and set them to the reducer
        const userId = action.payload;
        const response = yield axios.get(`/garden/${userId}/plots`);
        const userPlots = response.data;
        yield put({ type: `SET_USER_PLOTS`, payload: userPlots}); 
        console.log(userPlots);
    

        const currentYear = Number(moment().format('YYYY'));
        const currentMonth = Number(moment().format('MM')); 

        const initialPlotID = yield () => { 
            var plotID = 0;
            if (userPlots.length === 1){
                plotID = userPlots[0].id                                              //if there's only one plot
            }
            else{
                
                userPlots.find(plot =>
                    { 
                    console.log(plot.year);
                    if (plot.year === currentYear){                                 //START WITH CURRENT YEAR
                        if (plot.month === currentMonth){                           //then current month
                            plotID = plot.id;
                            }
                        else if (plot.month > currentMonth){                        //if no match, go to next future plot
                            plotID = plot.id;
                            }
                            else{
                            plotID = plot.id;                                          //if no future plots, go to last past plot
                            }; 
                        return plotID;
                        } //end loop
                        else if (plot.year === (currentYear + 1)){                  //IF NO MATCH, GO TO NEXT FUTURE YEAR
                            console.log('in next year', plot);                      //get earliest plot from that year
                            const nextClosestPlot = userPlots.filter(plot => plot.year === currentYear + 1).findLast(plot => plot);
                            console.log(`nextclosestPlot`, nextClosestPlot.id);
                            plotID = nextClosestPlot.id;  
                        }
                        else{
                            console.log('no match');                                //if no conditions above are true, get last plot from the past
                            plotID = plot.id;
                        };
                    }); //end loop
                };
            return plotID;
        };
            
        yield put({ type: 'GET_PLOT', payload: initialPlotID() });                    //get plot using initialPlotID function as payload 
    }
    catch(error){
        console.log('fetchUserPlots failed:', error);
    };
};

//adds notes to specific plot
function* addNotes(action){
    try{
        console.log(action.payload);
        yield axios({
            method: 'PUT',
            url: `/garden/notes/${action.payload.plot_id}`, 
            data: {notes: action.payload.notes}
        });
        yield put({ type: 'GET_PLOT', payload: action.payload.plot_id });
        
    }
    catch(error){
        console.log('addPlot failed,', error);
    };
};

export default gardenSaga;