import './PlantForm.css';
import '../../App.css';
//components
import AvailablePlants from './AvailablePlants/AvailablePlants';
import PlantList from './PlantList/PlantList';

function SelectPlants () {
    return(
        <div className="app_body">
            <div className="left_display">
                <AvailablePlants/>
            </div>
            <div className="right_display">
                <PlantList/>
            </div>
        </div>
    )
}

export default SelectPlants;


