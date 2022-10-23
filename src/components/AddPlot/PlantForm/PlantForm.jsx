import { useSelector } from 'react-redux';
import './PlantForm.css';
//components
import AvailablePlants from './AvailablePlants/AvailablePlants';
import PlantList from './PlantList/PlantList';
import PlantFormDialog from './PlantFormDialog';

function SelectPlants () {
    const userPlots = useSelector(store => store.garden.userPlots);

    return(
        <div className="app_body">
            <div className="left_display">
                <AvailablePlants/>
            </div>
            <div className="right_display">
                <PlantList/>
            </div>
            {userPlots.length === 0 && <PlantFormDialog/>} {/*new user dialogue*/}
        </div>
    )
}

export default SelectPlants;


