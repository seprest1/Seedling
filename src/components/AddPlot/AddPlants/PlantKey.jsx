import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
//components
import KeyItem from './KeyItem';
//MUI
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function PlantKey (){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'FETCH_PLANTS'});
    }, []);

    //go back to edit shade
    const history = useHistory();
    const sendBack = () => {
        dispatch({ type: 'CLEAR_PLOT' });
        history.push('/newplot/shade');
    };

    //submit plot to DB
    const user = useSelector(store => store.user.id);
    const month = useSelector(store => store.garden.month);
    const plot = useSelector(store => store.garden.plot);
    const submitPlot = () => {
        console.log(user);
        console.log(month);
        const totalPlants = plot.filter(div => div.plant_id);
        if (totalPlants.length === 48){     //only if all plants have been assigned
            dispatch({ 
                type: 'SEND_PLOT', 
                payload: {plot, month, user}
            }); //trigger saga function to send plot to DB
            alert('Added Plot!');
            history.push('/home');
        };
    };

    const plants = useSelector(store => store.garden.plants);
    const plantOptions = plants.map(plant => plant.name);

    return(
        <div className="key_body">
            <h2 className="key_h2">Key:</h2>
            <ul className="list">   
                {plants.map((plant, i) =>  
                    <KeyItem key={i} plant={plant}/>
                )}
            </ul>
            <Autocomplete
                disablePortal
                options={plantOptions}
                className="plant_input"
                renderInput={(params) => <TextField {...params} label="Add Plant" />}
                />
            <div className="buttons">
                <button onClick={sendBack} className="button">Back</button>
                <button onClick={submitPlot} className="button">Submit</button> 
            </div>
        </div>
    )
}

export default PlantKey;

