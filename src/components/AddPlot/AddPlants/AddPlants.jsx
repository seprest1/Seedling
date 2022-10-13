import '../AddPlot.css';
//components
import PlantBed from './PlantBed';
import PlantKey from './PlantKey';

function AddPlants(){
    return(
        <div className="add_plot_body">
            <div className="left_display">
                <PlantBed/>
            </div>
            <div className="right_display">
                <PlantKey/>
            </div>
        </div>
    )
}

export default AddPlants