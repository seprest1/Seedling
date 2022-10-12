import '../AddPlot.css';
//components
import PlantBed from './PlantBed';
import PlantKey from './PlantKey';

function AddPlants(){
    return(
        <div className="add_plot_body">
            <div className="bed_container">
                <PlantBed/>
            </div>
            <div className="key_container">
                <PlantKey/>
            </div>
        </div>
    )
}

export default AddPlants