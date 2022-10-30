import { combineReducers } from 'redux';

//initial plants user can choose from
const plants = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLANTS':
            return action.payload;
        default:
            return state;
    };
};

//array of plants that the user picks for their plot
const selectedPlants = (state = [], action) => {
    switch(action.type){
        case 'ADD_PLANT':
            return [{id: action.payload.id, name: action.payload.name, shade: action.payload.shade, color: action.payload.color, icon: action.payload.icon, companions: action.payload.companions, subvariety: null}, ...state];
        case 'REMOVE_PLANT':
            return state.filter((plant, i) => i !== action.payload);
        case 'SET_SUBVARIETY':
            return state.map((plant, i) => i === action.payload.index ? 
                                {...plant, subvariety: action.payload.subvariety} 
                                : plant);
        case 'SET_SELECTED_PLANTS':
            if (state = []){
                return action.payload;}
        case 'CLEAR_EVERYTHING':
            return [];
        default: 
            return state;
    };
};

//single plant user picked while setting plot
const pickedPlant = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PLANT_TYPE':
            return action.payload;
        case 'CLEAR_EVERYTHING':
            return {};
        default: 
            return state;
    };
};

//selected shade picked by user for planning their plot
const pickedShade = (state = '', action) => {
    switch (action.type) {
        case 'SET_SHADE':
            return action.payload;
        default: 
            return state;
    };
};

//creates an array with location already set                                
const initialPlot = [...Array(48)].map((div, i) => 
       ({   plant_id: null, 
            location: i, 
            name: null, 
            subvariety: null, 
            shade: null,  
            color: null,
            icon: null     }));
//data for each div in the plot
const divs = (state = initialPlot, action) => {
    switch(action.type) {
        case 'SET_DIV_SHADE':
            const shadedDiv = action.payload;          //maps through plot and changes only shade value
            return state.map(oldDiv => 
                oldDiv.location === shadedDiv.location ? 
                    {...oldDiv, shade: shadedDiv.shade} 
                    : oldDiv);  
        case 'SET_PLANT':     
            const plantDiv = action.payload;    //maps through plot and changes only plant ID & plant name
            return state.map(oldDiv => oldDiv.location === plantDiv.location ? 
                    {...oldDiv, plant_id: plantDiv.plant_id, name: plantDiv.name, subvariety: plantDiv.subvariety, color: plantDiv.color, icon: plantDiv.icon} 
                    : oldDiv);
        case 'SET_PLOT':
            return action.payload;  
        case 'CLEAR_EVERYTHING':
            return initialPlot;
        default: 
            return state;
    };
};

//get list of all of the user's plots
const userPlots = (state = [], action) => {
    switch(action.type) {
        case 'SET_USER_PLOTS':
            return action.payload;
        default:
            return state;
    }
}

//date the user sets for their plot
const date = (state = {}, action) => {
    switch(action.type){
        case 'SET_DATE':
            return action.payload;
        case 'CLEAR_EVERYTHING':
            return {};
        default:
            return state;
    };
};

//ID and notes for selected plot
const selectedPlot = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PLOT_INFO':
            return action.payload;
        default: 
            return state;
    };
}





const garden = combineReducers({
    plants,
    pickedShade,
    pickedPlant,
    divs,
    date,
    selectedPlants,
    selectedPlot,
    userPlots,
  });

export default garden;
