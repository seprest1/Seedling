import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//MUI
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';

function PlantKey (){
    const dispatch = useDispatch();
    
    const history = useHistory();
    const plot = useSelector(store => store.plot);
    const month = useSelector(store => store.month);
   
    const sendToNext = () => {
        const shadedDivTotal = plot.filter(div => div.shade);  
        if (month === 'Month'){     //makes sure that month is set
            alert('Set month for your plot!');
        }
        else if (shadedDivTotal.length === 35){    //determines if all plots have been assigned shade values               
                console.log('Sending plot to adding plants section:', plot);  
                history.push('/add_plants');
        };
    };
    

    return(
        <div className="key_body">
            <h2 className="key_h2">Key:</h2>
            <ul className="shade_list"> 
                <li>
                    <Tooltip title="Click!">
                        <div 
                            className="green1 icon"
                            onClick={() => dispatch({type: 'SET_SUNLIGHT', payload: 'Full Sun'})}>
                        </div> 
                    </Tooltip>
                    <span>Full Sun</span>
                </li>
             
                <li>
                    <Tooltip title="Click!">
                        <div 
                            className="green2 icon" 
                            onClick={() => dispatch({type: 'SET_SUNLIGHT', payload: 'Partial Sun'})}>
                        </div> 
                    </Tooltip>
                    <span>Partial Sun</span>
                </li>
                <li>
                    <Tooltip title="Click!">
                        <div 
                            className="green3 icon" 
                            onClick={() => dispatch({type: 'SET_SUNLIGHT', payload: 'Full Shade'})}>
                        </div> 
                    </Tooltip>
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



