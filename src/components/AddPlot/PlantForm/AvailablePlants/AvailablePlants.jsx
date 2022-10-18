import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
//components
import PlantItem from './PlantItem';

function AvailablePlants(){
    const dispatch = useDispatch();
    const month = useSelector(store => store.garden.month);
    const plants = useSelector(store => store.garden.plants);
    useEffect(() => {
        dispatch({ type: 'FETCH_PLANTS' });
        dispatch({ type: 'FETCH_API_PLANTS' })
    }, []);

    const [plantSearchTerm, setPlantSearchTerm] = useState('');

    return(
          <div className="left_body">
            <div className="left_header">
                <h3 className="left_title">{month}</h3>
            </div>
            <div className="available_plant_container">
                <ul className="available_plant_list">
                    
                    {/* {plants.map(plant => <PlantItem key={plant.id} plant={plant}/>)} */}
                </ul>
            </div>
            <input type="text" value={plantSearchTerm} onChange={(e) => setPlantSearchTerm(e.target.value)} placeholder="Look up plant"/>
            <button onClick={ () => dispatch({ type: 'SEARCH_PLANT_API', payload: plantSearchTerm }) }>Search</button>
      </div>
    )
}

export default AvailablePlants;