import { useDispatch, useSelector } from 'react-redux';

function PlantBed(){
    
    const plot = useSelector(store => store.garden.plot);
    const plant = useSelector(store => store.garden.plantKey);
    const month = useSelector(store => store.garden.month);
    console.log('Plant picked:', plant);

    //set and send plant values for plot reducer
    const dispatch = useDispatch();
    const setDiv = (div) => {
      console.log(div.shade);
      if (div.shade === plant.sunlight){    //prevents user from planting in the wrong shade zone
        const divToSend = {location: div.location, plant_id: plant.id, name: plant.name};
        console.log(divToSend);
          dispatch({
            type: 'SET_PLANT',
            payload: divToSend,
          });
        };
    };

    //change background of plot to match shade value (except in brown)
    const changeBackground = (div) => {
      switch(div.shade){
        case 'Full Sun':
          return 'green1';
        case 'Partial Sun':
          return 'green2';
        case 'Full Shade':
          return 'green3';
        default: 
          return null;
      }
    }

    //change colors of icons depending on plant (will have to find better way of accomplishing this)
    const plantColor = (div) => { 
      switch(div.plant_id){               
          case 6:
          case 8:
          case 9:
          case 10:
              return 'green';
          case 2:
          case 3:
              return 'purple';
          case 4:
          case 5:
              return 'orange';
          case 1:
          case 7:
              return 'red';
          case 11:
              return 'white';
          default:
              return null;
      }
  }

    return(
      <div className="plot_display">
        <div className="month">
            <h3 className="month_h3">{month}</h3> 
        </div>
        <div className="shade_bed">
        {plot.map((div, i) => (  /* creates 24 divs, index = 0 */
                <div key={i}   
                    className={`garden_bed ${changeBackground(div)}`}                    
                    onMouseOver={() => setDiv(div)}> 
                        {/* <span className="plant_name">{div.name}  </span> */}
                        {div.name && <div className={`icon ${plantColor(div)}`}></div>}
                </div>))} 
        </div>
      </div>
    )
}

export default PlantBed;