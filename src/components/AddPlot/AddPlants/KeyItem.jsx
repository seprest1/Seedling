import { useDispatch } from 'react-redux';

function KeyItem({plant, i}){
    const dispatch = useDispatch();
    
    return(
        <li className="selected_plant" 
            onClick={() => dispatch({type: 'SET_PLANT_TYPE', payload: plant})}>
            <div className={`selected_plant_icon plant_icon ${plant.color}`}></div>
            <div className="selected_plant_names">
                <span className="selected_plant_name">{plant.name}</span>
                <span className="selected_plant_subvariety">{plant.subvariety}</span>
                <span>{plant.sunlight}</span>
            </div>
        </li>
    )
}

export default KeyItem