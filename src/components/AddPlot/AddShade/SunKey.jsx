

function PlantKey (){
    <div className="key_body">
        <h2 className="key_h2">Key:</h2>
        <ul className="list">   
            {plants.map((plant, i) =>  /*pulls plants from DB and inserts into list*/
            <li 
                key={plant.id}
                className="plant_li"
                // onMouseOver={() => setHideButton(!hideButton)} /*toggles edit button*/
                onClick={() => dispatch({type: 'SET_PLANT_TYPE', payload: plant})}>
                <div 
                    className={`plant_icon ${plantColor(plant)}`}></div>
                <span className="name">{plant.name}</span>
                
            </li>)}
        </ul>
    </div>
}

export default PlantKey;



