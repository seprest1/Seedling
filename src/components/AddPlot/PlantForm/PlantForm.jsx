import '../AddPlot.css';
//components
import PlantList from './PlantList';
import SelectedPlants from './SelectedPlants';

function SelectPlants () {
    return(
        <div className="add_plot_body">
            <div className="bed_container">
                <PlantList/>
            </div>
            <div className="key_container">
                <SelectedPlants/>
            </div>
        </div>
    )
}

export default SelectPlants;