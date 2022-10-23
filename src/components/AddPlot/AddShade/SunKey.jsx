import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import '../AddPlot.css';

//components
import ShadeDialog from './ShadeDialog';


function PlantKey (){
    const dispatch = useDispatch();
    
    const history = useHistory();
    const plot = useSelector(store => store.garden.divs);
    const month = useSelector(store => store.garden.date.month);
    const displayMonth = useSelector(store => store.garden.date.display);
   
    const sendToNext = () => {
        const shadedDivTotal = plot.filter(div => div.shade);  
        console.log('Display Month:', displayMonth);
        if(!month){
            swal("Set month for your plot!");  //makes sure that month is set before moving on
        }
        else if (shadedDivTotal.length === 48){    //determines if all plots have been assigned shade values               
            console.log('Sending plot to adding plants section:', plot);  
            history.push('/newplot/form');
        };
    };

    const goBackToUser = () => {
        history.push('/user');
    };

    const userPlots = useSelector(store => store.garden.userPlots);

    return(
        <div className="right_body">
            <ul className="shade_list"> 
                <li>
                        <div 
                            className="shade1 icon"
                            onClick={() => dispatch({type: 'SET_SHADE', payload: 'Full Sun'})}>
                        </div> 
                    <span>Full Sun</span>
                </li>
             
                <li>
                        <div 
                            className="shade2 icon" 
                            onClick={() => dispatch({type: 'SET_SHADE', payload: 'Partial Sun'})}>
                        </div> 
                    <span>Partial Sun</span>
                </li>
                <li>
                        <div 
                            className="shade3 icon" 
                            onClick={() => dispatch({type: 'SET_SHADE', payload: 'Full Shade'})}>
                        </div> 
                    <span>Full Shade</span> 
                </li>
            </ul>
            <div className="buttons">
                <button onClick={goBackToUser} className="button">Back</button>
                <button onClick={sendToNext} className="button">Next</button>
            </div>
            {userPlots.length === 0 && <ShadeDialog/>} {/*opens a dialogue for new users to explain the process*/}
        </div>
    )
}

export default PlantKey;



