import { useHistory } from 'react-router-dom';

function PlantList(){
    const history = useHistory();

    return(
        <div className="key_body">
            <h2 className="key_h2">Plants Selected:</h2>
            <ul className="shade_list"> 
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
            </ul>
             <div className="buttons">
                <button onClick={() =>  history.push('/newplot/shade')} >Next</button>
            </div>
        </div>
    )
}

export default PlantList;