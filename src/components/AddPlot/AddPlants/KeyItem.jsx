import { useDispatch } from 'react-redux';

function KeyItem({plant}){
    const dispatch = useDispatch();
    
    return(
        <li className="selected_plant" 
            onClick={() => dispatch({type: 'SET_PLANT_TYPE', payload: plant})}>
            <div className={`selected_plant_icon plant_icon ${plant.color}`}><img src={`${plant.icon}`} className="display_vector"/></div>
            <div className="selected_plant_names">
                <span className="selected_plant_name">{plant.name}</span>
                <span className="selected_plant_subvariety">{plant.subvariety}</span>
                <div className="selected_plant_buttons">
                    <span>{plant.shade}</span>
                </div>
            </div>
        </li>
    )
}

export default KeyItem