import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//components
import KeyItem from './KeyItem';

function PlantKey (){
    //go back to edit shade
    const dispatch = useDispatch();
    const history = useHistory();
    const sendBack = () => {
        dispatch({ type: 'CLEAR_PLOT' });
        history.push('/newplot/shade');
    };

    //submit plot to DB
    const user = useSelector(store => store.user.id);
    const month = useSelector(store => store.garden.month);
    const plot = useSelector(store => store.garden.plot);
    const submitPlot = () => {
        console.log(user);
        console.log(month);
        const totalPlants = plot.filter(div => div.plant_id);
        if (totalPlants.length === 48){     //only if all plants have been assigned
            dispatch({ 
                type: 'SEND_PLOT', 
                payload: {plot, month, user}
            }); //trigger saga function to send plot to DB
            alert('Added Plot!');
            history.push('/home');
        };
    };

    return(
        <div className="right_body">
            <div className="right_header">
                <h3 className="right_title">Key:</h3>
            </div>
            <ul className="plant_list">   
            </ul>
            <div className="buttons">
                <button onClick={sendBack} className="button">Back</button>
                <button onClick={submitPlot} className="button">Submit</button> 
            </div>
        </div>
    )
}

export default PlantKey;
