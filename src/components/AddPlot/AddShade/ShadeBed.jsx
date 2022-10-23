import { useDispatch, useSelector } from 'react-redux';
//components
import MonthHeader from './MonthHeader';

function ShadeBed(){
  //calls shade selected
  const shade = useSelector(store => store.garden.pickedShade);
  const plot = useSelector(store => store.garden.divs);
  
  //set shade value for that specific div
  const dispatch = useDispatch();
  const setDiv = (location) => {
    const divToSend = {location, shade}
    {divToSend.shade && //only allows dispatch if shade is indicated 
      dispatch({
        type: 'SET_DIV_SHADE',
        payload: divToSend
      });
    };
  };

  const changeBackground = (div) => {
    switch(div.shade){
      case 'Full Sun':
        return 'shade1'; 
      case 'Partial Sun':
        return 'shade2';
      case 'Full Shade':
        return 'shade3';
      default: 
        return null;
    }
  }

    return(
        <div className="left_body">
          <MonthHeader/>
          <div className="shade_bed">
              {plot.map((div, i) => (  /* creates 24 divs, index = 0 */
              <div key={i}   
                  className={`plot_div ${changeBackground(div)}`}                    
                  onMouseOver={() => setDiv(i)}> 
              </div>))} 
          </div>
        </div>
    )
}

export default ShadeBed;