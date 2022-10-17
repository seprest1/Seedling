import { combineReducers } from 'redux';

const plants = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLANTS':
            return action.payload;
        default:
            return state;
    };
};

const selectedPlants = (state = [], action) => {
    switch(action.type){
        case 'ADD_PLANT':
            return [{id: action.payload.id, name: action.payload.name, sunlight: action.payload.sunlight, color: action.payload.color, subvariety: null}, ...state];
        case 'REMOVE_PLANT':
            return state.filter((plant, i) => i !== action.payload);
        case 'SET_SUBVARIETY':
            return state.map((plant, i) => i === action.payload.index ? 
                                {...plant, subvariety: action.payload.subvariety} 
                                : plant);
        case 'CLEAR_EVERYTHING':
            return [];
        default: 
            return state;
    };
};

const month = (state = 'Month', action) => {
    switch(action.type){
        case 'SET_MONTH':
            return action.payload;
        case 'CLEAR_EVERYTHING':
            return 'Month';
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
            color: null     }));
const plot = (state = initialPlot, action) => {
    switch(action.type) {
        case 'SET_SHADE':
            const shadedDiv = action.payload;          //maps through plot and changes only shade value
            return state.map(oldDiv => 
                oldDiv.location === shadedDiv.location ? 
                    {...oldDiv, shade: shadedDiv.shade} 
                    : oldDiv);  
        case 'SET_PLANT':     
            const plantDiv = action.payload;    //maps through plot and changes only plant ID & plant name
            return state.map(oldDiv => oldDiv.location === plantDiv.location ? 
                    {...oldDiv, plant_id: plantDiv.plant_id, name: plantDiv.name, subvariety: plantDiv.subvariety, color: plantDiv.color} 
                    : oldDiv);
        case 'SET_PLOT':
            return action.payload;  
        case 'CLEAR_PLOT':
            return initialPlot; 
        case 'CLEAR_EVERYTHING':
            return initialPlot;
        default: 
            return state;
    };
};

const sunKey = (state = '', action) => {
    switch (action.type) {
        case 'SET_SUNLIGHT':
            return action.payload;
        default: 
            return state;
    };
};

const plantKey = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PLANT_TYPE':
            return action.payload;
        default: 
            return state;
    };
};

const plotID = (state = 0, action) => {
    switch (action.type) {
        case 'SET_PLOT_ID':
            return action.payload;
        default: 
            return state;
    };
}

const garden = combineReducers({
    plants,
    sunKey,
    plantKey,
    plot,
    month,
    selectedPlants,
    plotID,
  });

export default garden;