import { useSelector, useDispatch } from 'react-redux';
//components
import PlantBed from '../../AddPlot/AddPlants/PlantBed';
import EditKey from './EditKey';

function EditPlot(){
    const user = useSelector(store => store.user);
    const plot = useSelector(store => store.divs);

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