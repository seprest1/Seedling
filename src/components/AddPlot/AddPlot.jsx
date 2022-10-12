import { useState } from 'react';
//components
import AddPlants from './AddPlants/AddPlants';
import AddShade from './AddPlants/AddPlants';


function AddPlot(){
    const [displayPlants, setDisplayPlants] = useState(false);

    return(
        <div className="add_plot_container">
            {displayPlants === false ?
                <AddShade/>
                :
                <AddPlants/>}
        </div>
    )
}
export default AddPlot;