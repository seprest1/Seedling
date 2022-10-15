import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PlotDisplay(){
  const dispatch = useDispatch();
  const user = useSelector (store => store.user);
  useEffect(() => {
    dispatch({ type: 'FETCH_PLOT', payload: user.id});
  }, []);

  const month = useSelector(store => store.garden.month);
  const plot = useSelector (store => store.garden.plot);


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
    };
  };

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
    };
};


    return(
        <div className="user_plots">
          <div className="user_header">
            <h3 className="user_title">{month}</h3> 
          </div>
          <div className="display_bed">
          {plot.map((div, i) => (  /* creates 24 divs, index = 0 */
                <div key={i} className={`display_div ${changeBackground(div)}`}> 
                  <div className={`display_icon ${plantColor(div)}`}></div>
                </div>))} 
          </div>
          <div className="change_plot_buttons">
            <button className="display_button">←</button>
            <button className="display_button">→</button>
          </div>
        </div>
    )
}

export default PlotDisplay;