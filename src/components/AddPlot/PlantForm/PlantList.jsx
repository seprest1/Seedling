import { useHistory } from 'react-router-dom';

function SelectedPlants(){
    const history = useHistory();
    return(
        <div className="right_body">
            <div className="right_header">
                <h3 className="right_title">Month</h3>
            </div>
            <ul className="plant_list"> 
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
            </ul>
            <div className="buttons">
                <button onClick={() =>  history.push('/newplot/shade')} className="button">Next</button>
            </div>
        </div>
    )
}

export default SelectedPlants;