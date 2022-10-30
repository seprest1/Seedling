import { useSelector } from 'react-redux';
//components
import PlantItem from './PlantItem';

function AvailablePlants(){
    const plants = useSelector(store => store.garden.plants);
    const month = useSelector(store => store.garden.date.display);

    return(
          <div className="left_body">
            <div className="left_header">
                <h3 className="left_title">{month}</h3>
            </div>
            <div className="available_plant_container">
                <ul className="available_plant_list">
                    {plants.map(plant => <PlantItem key={plant.id} plant={plant}/>)}
                </ul>
            </div>
      </div>
    )
}

export default AvailablePlants;