import { useDispatch } from 'react-redux';

function KeyItem({plant, i}){
    const dispatch = useDispatch();
    
    return(
        <li className="selected_plant" 
            onClick={() => dispatch({type: 'SET_PLANT_TYPE', payload: plant})}>
            <div className={`selected_plant_icon plant_icon ${plant.color}`}></div>
            <div className="selected_plant_names">
                <span className="selected_plant_name">{plant.name}</span>
                <span className="selected_plant_subvariety">Subvariety</span>
            </div>
            <div className="selected_plant_buttons">
                <button className="selected_button edit">✎</button>
                <button className="selected_button edit" onClick={() => dispatch({type: 'REMOVE_PLANT', payload: i})}>⨉</button>
            </div>
        </li>
    )
}

export default KeyItem