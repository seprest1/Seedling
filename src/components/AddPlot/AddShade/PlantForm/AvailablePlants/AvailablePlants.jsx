import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import moment from 'moment';
//components
import PlantItem from './PlantItem';

function AvailablePlants(){
    const dispatch = useDispatch();
    const plants = useSelector(store => store.garden.plants);
    const month = useSelector(store => store.garden.date.display);
    useEffect(() => {
        dispatch({type: 'FETCH_PLANTS'});
    }, []);

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