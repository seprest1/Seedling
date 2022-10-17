import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function PlantBed(){
  useEffect(() => {
    dispatch({type: 'FETCH_PLOT'});
  }, []);
    
    const plot = useSelector(store => store.garden.plot);
    const plant = useSelector(store => store.garden.plantKey);
    const month = useSelector(store => store.garden.month);

    //set and send plant values for plot reducer
    const dispatch = useDispatch();
    const setDiv = (div) => {
      if (div.shade === plant.shade){    //prevents user from planting in the wrong shade zone
        const divToSend = {
            location: div.location, 
            plant_id: plant.id, 
            name: plant.name, 
            color: plant.color,
            subvariety: plant.subvariety};

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
              return 'light_green';
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

  const vector_image = "Images/Plant_Icons/beet.png";

    return(
      <div className="left_body">
        <div className="left_header">
            <h3 className="left_title">{month}</h3> 
        </div>
        <div className="shade_bed">
        {plot.map((div, i) => (  /* creates 24 divs, index = 0 */
                <div key={i}   
                    className={`plot_div ${changeBackground(div)}`}                    
                    onMouseOver={() => setDiv(div)}> 
                        {div.name && <div className={`plant_icon ${plantColor(div)}`}>
                          <img src={vector_image} className="plant_vector"/>
                          </div>}
                </div>))} 
        </div>
      </div>
    )
}

export default PlantBed;