//components
import SunKey from "./AddPlot/AddShade/SunKey";
import ShadeBed from "./AddPlot/AddShade/ShadeBed";


function EditMode (){

    return (
        <div className="app_body">
            <div className="bed_container">
                <ShadeBed/>
            </div>
            <div className="key_container">
                <SunKey/>
            </div>
        </div>
    )
}

export default EditMode;