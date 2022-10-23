import AvailablePlants from "../../AddPlot/AddShade/PlantForm/AvailablePlants/AvailablePlants";
import EditList from "./EditList";

function EditPlants(){
    return(
        <div className="app_body">
            <div className="left_display">
                <AvailablePlants/>
            </div>
            <div className="right_display">
                <EditList/>
            </div>
        </div>
    )
}

export default EditPlants;