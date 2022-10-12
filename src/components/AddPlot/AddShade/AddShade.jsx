//components
import ShadeBed from './ShadeBed';
import SunKey from './SunKey';

function AddShade () {
    return(
        <div className="add_plot_body">
            <div className="bed_container">
                <ShadeBed/>
            </div>
            <div className="key_container">
                <SunKey/>
            </div>
        </div>
    )
}

export default AddShade;