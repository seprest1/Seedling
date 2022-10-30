import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
//components
import KeyItem from './KeyItem';

function PlantKey (){
    //go back to edit plants
    const dispatch = useDispatch();
    const history = useHistory();
    const sendBack = () => {
        history.push('/newplot/form');
    };

    //submit plot to DB
    const user = useSelector(store => store.user.id);
    const plot = useSelector(store => store.garden.divs);
    const plants = useSelector(store => store.garden.selectedPlants);
    const date = useSelector(store => store.garden.date);
    const submitPlot = () => {
        const totalPlants = plot.filter(div => div.plant_id);
        if (totalPlants.length === 48){     //only if all plants have been assigned
            dispatch({ 
                type: 'SEND_PLOT', 
                payload: {plot, date, user}
            }); //trigger saga function to send plot to DB
            swal("Added Plot!");
            history.push('/home');
        };
    };

    //sorts through plants to show full sun first
    const order = { "Full Sun": 1, "Partial Sun": 2, "Full Shade": 3 };
    const plantsSorted = plants.sort((a, b) => (order[a.shade] || Number.MAX_VALUE) - (order[b.shade] || Number.MAX_VALUE));

    return(
        <div className="right_body">
            <ul className="plant_list"> 
                {plantsSorted.map((plant, i) => <KeyItem plant={plant} key={i}/>)}  
            </ul>
            <div className="buttons">
                <button onClick={sendBack} className="button">Back</button>
                <button onClick={submitPlot} className="button">Submit</button> 
            </div>
        </div>
    )
}

export default PlantKey;

