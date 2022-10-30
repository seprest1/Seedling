import { useSelector } from 'react-redux';
import './PlantForm.css';
//components
import AvailablePlants from './AvailablePlants/AvailablePlants';
import PlantList from './PlantList/PlantList';
import PlantFormDialog from './PlantFormDialog';

function SelectPlants () {
    const userPlots = useSelector(store => store.garden.userPlots);
    const selectedPlants = useSelector(store => store.garden.selectedPlants);

    return(
        <div className="app_body">
            <div className="left_display">
                <AvailablePlants/>
            </div>
            <div className="right_display">
                <PlantList/>
            </div>
            {/*opens a dialogue for new users to explain the process -- will re-rend until user picks a plant, so not perfect*/} 
            {(userPlots.length === 0 && selectedPlants.length === 0) && <PlantFormDialog/>}
        </div>
    )
}

export default SelectPlants;


