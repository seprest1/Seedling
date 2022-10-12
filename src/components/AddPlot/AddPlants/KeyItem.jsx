import { useDispatch, useSelector } from 'react-redux';

function KeyItem({plant}){
    const dispatch = useDispatch();

    return(
        <li 
            className="plant_li"
            // onMouseOver={() => setHideButton(!hideButton)} /*toggles edit button*/
            onClick={() => dispatch({type: 'SET_PLANT_TYPE', payload: plant})}>
            <div 
                className={`plant_icon ${plant.color}`}></div>
            <span className="name">{plant.name}</span> 
        </li>
    )
}

export default KeyItem