import { useState } from 'react';
import { useDispatch } from 'react-redux';

function PlantName({plant, i}){

    const dispatch = useDispatch();
   
    const [subvarietyInput, setSubvarietyInput] = useState('Add Subvariety');
    const [showSubvarietyInput, setShowSubvarietyInput] = useState(true);
    const handleSubvarietyInput = () => {
        setSubvarietyInput('');
        setShowSubvarietyInput(!showSubvarietyInput);
    }

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
            <div className={`selected_plant_icon plant_icon ${plant.color}`}></div>
            <div className="selected_plant_names">
                <span className="selected_plant_name">{plant.name}</span>
                {showSubvarietyInput === true ? 
                    <span className="selected_plant_subvariety">{plant.subvariety ? plant.subvariety : 'Add Subvariety'}</span>
                    :
                    <input type="text" className="selected_plant_subvariety"
                            value={subvarietyInput}
                            onChange={(e) => setSubvarietyInput(e.target.value)}/>}
            </div>
            {showSubvarietyInput === true ? 
            <div className="selected_plant_buttons">
                <button className="selected_button edit" onClick={handleSubvarietyInput}>✎</button>
                <button className="selected_button edit" onClick={() => dispatch({type: 'REMOVE_PLANT', payload: i})}>⨉</button>
            </div>
            :
            <div className="selected_plant_buttons">
                <button className="selected_button edit" onClick={(i) => addSubvariety(i)}>✓</button>
            </div>}
        </li>
    )
}

export default PlantName; 