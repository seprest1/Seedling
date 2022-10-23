import { useDispatch } from 'react-redux';
//MUI
import Tooltip from '@mui/material/Tooltip';

function KeyItem({plant}){
    const dispatch = useDispatch();

    const shadeIcon = (plant) => {
        switch (plant.shade){
            case 'Full Sun': return "/Images/weather/sun.png";
            case 'Partial Sun': return "/Images/weather/cloudy.png";
            case 'Full Shade': return "/Images/weather/cloudy-night.png";
            default: return "/Images/weather/sun.png";
        }
    }
    
    return(
        <li className="selected_plant" 
            onClick={() => dispatch({type: 'SET_PLANT_TYPE', payload: plant})}>
            <div className="selected_plant_icon">
                <div className={`plant_icon ${plant.color}`}><img src={`${plant.icon}`} className="display_vector"/></div>
            </div>
            <div className="selected_plant_names">
                <span className="selected_plant_name">{plant.name}</span>
                <span className="selected_plant_subvariety">{plant.subvariety}</span>
            </div>
            <div className="selected_plant_buttons">
                <Tooltip title={plant.shade}>
                    <img src={shadeIcon(plant)} className="selected_shade_icon"/>
                </Tooltip>
            </div>
        </li>
    )
}

export default KeyItem