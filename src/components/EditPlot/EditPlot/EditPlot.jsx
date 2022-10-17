import PlantBed from '../../AddPlot/AddPlants/PlantBed';
import EditKey from './EditKey';

function EditPlot(){
   return(
    <div className="app_body">
        <div className="left_display">
            <PlantBed/>
        </div>
        <div className="right_display">
            <EditKey/>
        </div>
    </div>
   )
}

export default EditPlot;