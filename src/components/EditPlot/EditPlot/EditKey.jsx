import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
//components
import KeyItem from '../../AddPlot/AddPlants/KeyItem';

function EditKey (){
    //go back to edit plants
    const dispatch = useDispatch();
    const plants = useSelector(store => store.garden.selectedPlants);

    //submit edited plot to DB
    const plot = useSelector(store => store.garden.divs);
    const plotID = useSelector(store => store.garden.selectedPlot.id);
    const submitEditedPlot = () => {
        const totalPlants = plot.filter(div => div.plant_id);
        if (totalPlants.length === 48){     //only if all plants have been assigned
            dispatch({ 
                type: 'EDIT_PLOT', 
                payload: {plot: plot, plot_id: plotID}
            }); 
            dispatch({ type: 'CLEAR_PLANT_TYPE '}) //clears the plant selected to render on DOM 
            swal("Saved Plot!");
            history.push('/home');
        };
    };

    const history = useHistory();
    const sendBack = () => {
        history.push(`/editplot/${plotID}/plants`);
    };

    return(
        <div className="right_body">
            <div className="right_header">
                <h3 className="right_title">Edit Plants</h3>
            </div>
            <ul className="plant_list"> 
                {plants.map((plant, i) => <KeyItem plant={plant} key={i}/>)}  
            </ul>
            <div className="buttons">
                <button onClick={sendBack} className="button">Add Plants</button>
                <button onClick={submitEditedPlot} className="button">Save</button> 
            </div>
        </div>
    )
}

export default EditKey;
