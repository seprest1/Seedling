import '../AddPlot.css';
//components
import ShadeBed from './ShadeBed';
import SunKey from './SunKey';

function AddShade () {
    return(
        <div className="add_plot_body">
            <div className="left_display">
                <ShadeBed/>
            </div>
            <div className="right_display">
                <SunKey/>
            </div>
        </div>
    )
}

export default AddShade;