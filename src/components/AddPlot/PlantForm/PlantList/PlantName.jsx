import { useState } from 'react';
import { useDispatch } from 'react-redux';
//MUI
import Tooltip from '@mui/material/Tooltip';

function PlantName({plant, i}){

    const dispatch = useDispatch();
   
    //handles toggling and clearing of subvariety input
    const [subvarietyInput, setSubvarietyInput] = useState('Add Subvariety');
    const [showSubvarietyInput, setShowSubvarietyInput] = useState(true);
    const handleSubvarietyInput = () => {
        setSubvarietyInput('');
        setShowSubvarietyInput(!showSubvarietyInput);
    }

    //adds subvariety to plant item
    const addSubvariety = () => {
        console.log(subvarietyInput);
        console.log(plant);
        dispatch({
            type: 'SET_SUBVARIETY', 
            payload: {index: i, subvariety: subvarietyInput}
        });
        setShowSubvarietyInput(!showSubvarietyInput)
    }

    return(
        <li className="selected_plant">
            <div className="selected_plant_icon">
                <div className={`plant_icon ${plant.color}`}><img src={`${plant.icon}`} className="display_vector"/></div>
            </div>
            <div className="selected_plant_names">
                <span className="selected_plant_name">{plant.name}</span>
                {showSubvarietyInput === true ? //toggles between showing/hiding input
                    <span className="selected_plant_subvariety">{plant.subvariety ? plant.subvariety : 'Subvariety'}</span>
                    :
                    <form onSubmit={addSubvariety}>
                        <input type="text" className="selected_plant_input"
                                value={subvarietyInput}
                                onChange={(e) => setSubvarietyInput(e.target.value)}/>
                    </form>}

            </div>
            {showSubvarietyInput === true && //toggles between showing/hiding input
            <div className="selected_plant_buttons">
                <Tooltip title="Edit">
                    <button className="selected_button edit" onClick={handleSubvarietyInput}>✎</button>
                </Tooltip>
                <Tooltip title="Delete">
                    <button className="selected_button edit" onClick={() => dispatch({type: 'REMOVE_PLANT', payload: i})}>⨉</button>
                </Tooltip>
            </div>}
        </li>
    )
}

export default PlantName; 