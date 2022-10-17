import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
//components
import PlantName from '../../AddPlot/PlantForm/PlantList/PlantName';

function EditList(){
    const history = useHistory();
    const selectedPlants = useSelector(store => store.garden.selectedPlants);

    return(
        
        <div className="right_body">
            <div className="right_header">
                <h3 className="right_title">Add Plants</h3> 
            </div>
            <ul className="plant_list"> 
                {selectedPlants.map((plant, i) => 
                    <PlantName plant={plant} key={i}/>)}
            </ul>
            <div className="buttons">
                <button onClick={() => history.push('/editplot')} className="button">Back</button>
            </div>
        </div>
    )
}

export default EditList;