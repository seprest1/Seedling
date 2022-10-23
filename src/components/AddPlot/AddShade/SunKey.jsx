import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import '../AddPlot.css';


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

    return(
        <div className="right_body">
             <div className="right_header">
                <h3 className="right_title"></h3>
            </div>
            <div className="shade_info">
                <p className="shade_directions">
                    Each plant prefers a different kind of sunlight.
                    Map out the sunny and shady spots of your plot by clicking on the key below 
                    and dragging to each 1ft x 1ft section. 
                </p>
                <p className="shade_directions">
                    Set a month for this garden bed, so you can keep track of your harvest for every season.
                </p>
            </div>
            <ul className="shade_list"> 
                <li>
                        <div 
                            className="green1 icon"
                            onClick={() => dispatch({type: 'SET_SHADE', payload: 'Full Sun'})}>
                        </div> 
                    <span>Full Sun</span>
                </li>
             
                <li>
                        <div 
                            className="green2 icon" 
                            onClick={() => dispatch({type: 'SET_SHADE', payload: 'Partial Sun'})}>
                        </div> 
                    <span>Partial Sun</span>
                </li>
                <li>
                        <div 
                            className="green3 icon" 
                            onClick={() => dispatch({type: 'SET_SHADE', payload: 'Full Shade'})}>
                        </div> 
                    <span>Full Shade</span> 
                </li>
            </ul>
            <div className="buttons">
                <button onClick={goBackToUser} className="button">Back</button>
                <button onClick={sendToNext} className="button">Next</button>
            </div>
        </div>
    )
}

export default PlantKey;



