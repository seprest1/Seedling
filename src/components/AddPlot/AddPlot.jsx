import { useState } from 'react';
//components
import AddShade from './AddShade/ShadeBed';
import SunKey from './AddShade/SunKey';
import PlantBed from './AddPlants/PlantBed';
import PlantKey from './AddPlants/PlantKey';

function AddPlot(){
    return(
        <div className="add_plot_container">
            <div className="add_shade">
                <AddShade/>
                <SunKey/>
            </div>
            <div className="add_plants">
                <PlantBed/>
                <PlantKey/>
            </div>
        </div>
    )
}
export default AddPlot;