import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
//components
import PlantListHeader from './PlantListHeader';
import PlantName from './PlantName';

function SelectedPlants(){
    const history = useHistory();
    const month = useSelector(store => store.garden.month);
    const selectedPlants = useSelector(store => store.garden.selectedPlants);

    const sendToNext = () => {
        if (month === 'Month'){     //makes sure that month is set before moving on
            alert('Set month for your plot!');
        }
        else{             
            history.push('/newplot/shade');
        };
    };

    return(
        <div className="right_body">
            <PlantListHeader/>
            <ul className="plant_list"> 
                {selectedPlants.map((plant, i) => 
                    <PlantName plant={plant} i={i} key={i}/>)}
            </ul>
            <div className="buttons">
                <button onClick={sendToNext} className="button">Next</button>
            </div>
        </div>
    )
}

export default SelectedPlants;