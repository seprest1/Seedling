import '../AddPlot.css';
//components
import AvailablePlants from './AvailablePlants';
import PlantList from './PlantList';

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


