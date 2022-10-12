import { combineReducers } from 'redux';

const plants = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLANTS':
            return action.payload;
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

//creates an array with location already set                                
const initialPlot = [...Array(35)].map((div, i) => ({location: i, plant_id: null, shade: null, subvariety: null, name: null}));

const plot = (state = initialPlot, action) => {
    switch(action.type) {
        case 'SET_SHADE': 
            console.log(state);
            const shadedDiv = action.payload;          //maps through plot and changes only shade value
            return state.map(oldDiv => 
                oldDiv.location === shadedDiv.location ? 
                    {...oldDiv, shade: shadedDiv.shade} 
                    : oldDiv);  
        case 'SET_PLANT':
            console.log(state);        
            const plantDiv = action.payload;    //maps through plot and changes only plant ID & plant name
            return state.map(oldDiv => oldDiv.location === plantDiv.location ? 
                    {...oldDiv, plant_id: plantDiv.plant_id, name: plantDiv.name} 
                    : oldDiv);  
        case 'CLEAR_PLOT':
            return initialPlot; //NEED TO FIX THIS
        default: 
            return state;
    };
};

const month = (state = 'Month', action) => {
    switch(action.type){
        case 'SET_MONTH':
            return action.payload;
        default:
            return state;
    };
};

const garden = combineReducers({
    plants,
    sunKey,
    plantKey,
    plot,
    month
  });

export default garden;