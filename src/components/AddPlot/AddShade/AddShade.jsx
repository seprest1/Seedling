import { useSelector } from 'react-redux';
import '../AddPlot.css';
//components
import ShadeBed from './ShadeBed';
import SunKey from './SunKey';
import ShadeDialog from './ShadeDialog';

function AddShade () {

    const userPlots = useSelector(store => store.garden.userPlots);
    const month = useSelector(store => store.garden.date.month);

    return(
        <div className="app_body">
            <div className="left_display">
                <ShadeBed/>
            </div>
            <div className="right_display">
                <SunKey/>
            </div>
             {/*opens a dialogue for new users to explain the process*/}
             {(userPlots.length === 0 && !month) && <ShadeDialog/>} 
        </div>
    )
}

export default AddShade;