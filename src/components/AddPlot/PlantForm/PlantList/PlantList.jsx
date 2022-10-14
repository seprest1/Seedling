import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//components
import PlantListHeader from './PlantListHeader';

function SelectedPlants(){
    const history = useHistory();
    const dispatch = useDispatch();
    const selectedPlants = useSelector(store => store.garden.selectedPlants);


    return(
        <div className="right_body">
            <PlantListHeader/>
            <ul className="plant_list"> 
                {selectedPlants.map((plant, i) => 
                    <li className="selected_plant" key={i}>
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
                )}
            </ul>
            <div className="buttons">
                <button onClick={() =>  history.push('/newplot/shade')} className="button">Next</button>
            </div>
        </div>
    )
}

export default SelectedPlants;