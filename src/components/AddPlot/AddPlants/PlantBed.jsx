import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import moment from 'moment';

function PlantBed(){
  useEffect(() => {
  }, []);
    
    const plot = useSelector(store => store.garden.divs);
    const plant = useSelector(store => store.garden.pickedPlant);
    const month = useSelector(store => store.garden.date.display);

    //set and send plant values for plot reducer
    const dispatch = useDispatch();
    const setDiv = (div) => {
      console.log(div);
      if (div.shade === plant.shade){    //prevents user from planting in the wrong shade zone
        const divToSend = {
            location: div.location, 
            plant_id: plant.id, 
            name: plant.name, 
            color: plant.color,
            subvariety: plant.subvariety,
            icon: plant.icon};

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
                        {div.name && <div className={`plant_icon ${div.color}`}>
                            <img src={`${div.icon}`} className="display_vector"/>
                          </div>}
                </div>))} 
        </div>
      </div>
    )
}

export default PlantBed;