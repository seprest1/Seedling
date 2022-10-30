import { useDispatch } from 'react-redux';
//components
import MonthChart from "./MonthChart";
//MUI
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function PlantItem({plant}){
    const dispatch = useDispatch();
    const companions = plant.companion;
    const addPlant = () => {
        dispatch({
            type: 'ADD_PLANT',
            payload: {
                id: plant.id,
                name: plant.name,
                shade: plant.shade,
                color: plant.color,
                icon: plant.icon
            }
        });
    };

    const shadeIcon = (plant) => {
        switch (plant.shade){
            case 'Full Sun': return "/Images/Weather_Icons/sun.png";
            case 'Partial Sun': return "/Images/Weather_Icons/cloudy.png";
            case 'Full Shade': return "/Images/Weather_Icons/cloudy-night.png";
            default: return "/Images/Weather_Icons/sun.png";
        }
    }

    return(
        <li className="available_plant">
            <div className="a_plant_header">
                <span className="a_plant_name">{plant.name}</span>
                <span className="subvariety"></span>
                <button className="icon_button edit a_edit" onClick={addPlant}>+</button>
            </div>
            <div className="a_plant_body">
                <div className="a_plant_image_section">
                    <img src={`${plant.image}`}
                        className="a_plant_image"/>
                </div>
                <div className="a_plant_info">
                    <div className="a_plant_details">
                        <div className="a_plant_subname">
                            <div className="a_plant_name_companions">
                                <p className="scientific_name">{plant.scientific_name}</p>
                                <Stack direction="row" spacing={1}>
                                {companions.map(plant => 
                                <Tooltip title={plant.relationship} placement="top">
                                    <Chip
                                        label={plant.helper_plant}
                                        size="small"
                                        color="secondary"/>
                                </Tooltip>
                                )}
                                </Stack>
                            </div>
                            <Tooltip title={plant.shade} placement="bottom-end">
                                <img src={shadeIcon(plant)} className="shade_icon"/>
                            </Tooltip>
                        </div>
                        <p className="a_plant_fact">{plant.description}</p>
                        <p className="a_plant_fact"><span className="a_plant_span">Sowing:</span>{plant.sowing}</p>
                        <p className="a_plant_fact"><span className="a_plant_span">Row Spacing:</span>{plant.row_spacing}</p>
                    </div>
                    <MonthChart plant={plant.growing}/>
                </div>
            </div>
        </li>
    )
}

export default PlantItem;
//✎