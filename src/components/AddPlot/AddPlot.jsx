import { useState } from 'react';
import './AddPlot.css';
//components
import AddShade from './AddShade/AddShade';
import AddPlants from './AddPlants/AddPlants';



function AddPlot(){
    const [displayPlants, setDisplayPlants] = useState(false);

    return(
        <div className="add_plot_container">
                <AddShade/>
        </div>
    )
}
export default AddPlot;