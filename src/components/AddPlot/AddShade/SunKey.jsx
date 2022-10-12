import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PlantKey (){
    const dispatch = useDispatch();
    
    const history = useHistory();
    const plot = useSelector(store => store.garden.plot);
    const month = useSelector(store => store.garden.month);
   
    const sendToNext = () => {
        const shadedDivTotal = plot.filter(div => div.shade);  
        if (month === 'Month'){     //makes sure that month is set
            alert('Set month for your plot!');
        }
        else if (shadedDivTotal.length === 48){    //determines if all plots have been assigned shade values               
                console.log('Sending plot to adding plants section:', plot);  
                history.push('/newplot/plants');
        };
    };
    

    return(
        <div className="key_body">
            <h2 className="key_h2">Key:</h2>
            <ul className="shade_list"> 
                <li>
                        <div 
                            className="green1 icon"
                            onClick={() => dispatch({type: 'SET_SUNLIGHT', payload: 'Full Sun'})}>
                        </div> 
                    <span>Full Sun</span>
                </li>
             
                <li>
                        <div 
                            className="green2 icon" 
                            onClick={() => dispatch({type: 'SET_SUNLIGHT', payload: 'Partial Sun'})}>
                        </div> 
                    <span>Partial Sun</span>
                </li>
                <li>
                        <div 
                            className="green3 icon" 
                            onClick={() => dispatch({type: 'SET_SUNLIGHT', payload: 'Full Shade'})}>
                        </div> 
                    <span>Full Shade</span> 
                </li>
            </ul>
            <div className="buttons">
                <button onClick={sendToNext} >Next</button>
            </div>
        </div>
    )
}

export default PlantKey;



