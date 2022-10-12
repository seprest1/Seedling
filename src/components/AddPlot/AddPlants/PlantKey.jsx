import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
        history.push('/add_shade');
    };

    //submit plot to DB
    const user = useSelector(store => store.user.id);
    const month = useSelector(store => store.garden.month);
    const plot = useSelector(store => store.garden.plot);
    const submitPlot = () => {
        console.log(user);
        console.log(month);
        const totalPlants = plot.filter(div => div.plant_id);
        if (totalPlants.length === 80){     //only if all plants have been assigned
            dispatch({ 
                type: 'SEND_PLOT', 
                payload: {plot, month, user}
            }); //trigger saga function to send plot to DB
            alert('Added Plot!');
            history.push('/home');
        };
    };

    //change colors of icons depending on plant
    const plants = useSelector(store => store.garden.plants);
    const plantOptions = plants.map(plant => plant.name);
    const plantColor = (plant) => {     
        switch(plant.id){               
            case 6:
            case 8:
            case 9:
            case 10:
                return 'green';
            case 2:
            case 3:
                return 'purple';
            case 4:
            case 5:
                return 'orange';
            case 1:
            case 7:
                return 'red';
            case 11:
                return 'white';
            default:
                return null;
        }
    }
    

    return(
        <div className="key_body">
            <h2 className="key_h2">Key:</h2>
            <ul className="list">   
                {plants.map((plant, i) =>  /*pulls plants from DB and inserts into list*/
                <li 
                    key={plant.id}
                    className="plant_li"
                    // onMouseOver={() => setHideButton(!hideButton)} /*toggles edit button*/
                    onClick={() => dispatch({type: 'SET_PLANT_TYPE', payload: plant})}>
                    <div 
                        className={`plant_icon ${plantColor(plant)}`}></div>
                    <span className="name">{plant.name}</span>
                      
                </li>)}
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

