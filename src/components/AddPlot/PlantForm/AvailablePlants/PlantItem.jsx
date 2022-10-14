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
                sunlight: plant.sunlight,
                color: plant.color
            }
        });
    };

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
                        <p className="a_plant_subname">{plant.scientific_name} - {plant.sunlight}</p>
                        <p className="a_plant_fact">{plant.description}</p>
                        <p className="a_plant_fact">{plant.sowing}</p>
                        <p className="a_plant_fact">{plant.row_spacing}</p>
                    </div>
                    <MonthChart plant={plant}/>
                </div>
            </div>
        </li>
    )
}

export default PlantItem;
//✎