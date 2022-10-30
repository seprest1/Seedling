import { useDispatch } from 'react-redux';
//MUI
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';

function KeyItem({plant}){
    const dispatch = useDispatch();

    const shadeIcon = (plant) => {
        switch (plant.shade){
            case 'Full Sun': return "/Images/Weather_Icons/sun.png";
            case 'Partial Sun': return "/Images/Weather_Icons/cloudy.png";
            case 'Full Shade': return "/Images/Weather_Icons/cloudy-night.png";
            default: return "/Images/Weather_Icons/sun.png";
        }
    }

    const companions = plant.companions;
    
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
            <div className="key_icons">
            <Tooltip title={plant.shade}>
                <img src={shadeIcon(plant)} className="selected_shade_icon"/>
            </Tooltip>
            <Stack direction="column" spacing={1}>
                        {companions && companions.map(plant => 
                                <Tooltip title={plant.relationship} placement="top">
                                    <Chip
                                        label={plant.helper_plant}
                                        color="secondary"
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            "& .MuiChip-label": {
                                              width: 60,
                                              height: 15,
                                              fontSize: 11,
                                              textAlign: "center",
                                              padding: 1,
                                              color: '#b5b522',
                                            }}}/>
                                </Tooltip>
                                )}
                </Stack>
            </div>
        </li>
    )
}

export default KeyItem