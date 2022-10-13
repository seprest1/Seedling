import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//components
import PlantItem from './PlantItem';

function AvailablePlants(){
    const dispatch = useDispatch();
    const month = useSelector(store => store.garden.month);
    const plants = useSelector(store => store.garden.plants);
    useEffect(() => {
        dispatch({type: 'FETCH_PLANTS'});
        console.log(plants);
    }, []);

    return(
          <div className="left_body">
            <div className="left_header">
                <h3 className="left_title">Add Plants</h3>
            </div>
            <div className="available_plant_container">
                <ul className="available_plant_list">
                    {plants.map(plant => <PlantItem key={plant.id} plant={plant}/>)}
                </ul>
            </div>
      </div>
    )
}

export default AvailablePlants;


//MUI
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

// const plantOptions = plants.map(plant => plant.name);
// const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December'];

     {/* <Autocomplete
                    disablePortal
                    options={monthOptions}
                    className="plant_input"
                    renderInput={(params) => <TextField {...params} label="Add Month" />}
                    />
                <Autocomplete
                    disablePortal
                    options={plantOptions}
                    className="plant_input"
                    renderInput={(params) => <TextField {...params} label="Add Plant" />}
                    />          */}

//<button className="month_button" onClick={setMonth}>✎</button>
{/* <select className="month_select"
value={month}
onChange={(e) => dispatch({ type: 'SET_MONTH', payload: e.target.value})}>
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
</select> */}
