import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
//components
import PlantName from '../../AddPlot/PlantForm/PlantList/PlantName';

function EditList(){
    const history = useHistory();
    const selectedPlants = useSelector(store => store.garden.selectedPlants);
    const plotID = useSelector(store => store.garden.selectedPlot.id);

    return(
        <div className="right_body">
            <div className="right_header">
                <h3 className="right_title">Add Plants</h3> 
            </div>
            <ul className="plant_list"> 
                {selectedPlants.map((plant, i) => 
                    <PlantName plant={plant} key={i} i={i}/>)}
            </ul>
            <div className="buttons">
                <button onClick={() => history.push(`/editplot/${plotID}`)} className="button">Next</button>
            </div>
        </div>
    )
}

export default EditList;