import { useDispatch } from 'react-redux';
//components
import MonthChart from "./MonthChart";

function PlantItem({plant}){
    const dispatch = useDispatch();
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
            case 'Full Sun': return "/Images/weather/sun.png";
            case 'Partial Sun': return "/Images/weather/cloudy.png";
            case 'Full Shade': return "/Images/weather/cloudy-night.png";
            default: return "/Images/weather/sun.png";
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
                            <p className="scientific_name">{plant.scientific_name}</p>
                            <img src={shadeIcon(plant)} className="shade_icon"/>
                        </div>
                        <p className="a_plant_fact">{plant.description}</p>
                        <p className="a_plant_fact"><span className="a_plant_span">Sowing:</span>{plant.sowing}</p>
                        <p className="a_plant_fact"><span className="a_plant_span">Row Spacing:</span>{plant.row_spacing}</p>
                    </div>
                    <MonthChart plant={plant}/>
                </div>
            </div>
        </li>
    )
}

export default PlantItem;
//✎