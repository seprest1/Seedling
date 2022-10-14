import './PlantForm.css';
//components
import AvailablePlants from './AvailablePlants/AvailablePlants';
import PlantList from './PlantList/PlantList';

function SelectPlants () {
    return(
        <div className="add_plot_body">
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


