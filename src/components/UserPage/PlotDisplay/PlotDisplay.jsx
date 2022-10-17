import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
//MUI
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//components
import FindMonth from './FindMonth';

function PlotDisplay(){
  const dispatch = useDispatch();
  const user = useSelector (store => store.user);
  useEffect(() => {
    dispatch({ type: 'FETCH_PLOT', payload: user.id});    //TODO: FIX RENDERING PROBLEM
  }, [plotId]);

  const month = useSelector(store => store.garden.month);
  const plot = useSelector(store => store.garden.plot);
  const plotId = useSelector(store => store.garden.plotID);

  const history = useHistory();
  const sendToNext = () => {
    history.push('/newplot/shade');
    dispatch({ type: 'CLEAR_EVERYTHING' });
  }  

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
    };
  };

  const deletePlot = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this plot!",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => { 
      if (willDelete) { //if user presses okay after warning, then delete plot
        dispatch({ type: 'DELETE_PLOT', payload: plotId });
    }});
  }

    return(
        <div className="user_plot_display">   
          {month === 'Month' ?      /* if there isn't a plot to display */
                <>  
                <div className="user_header">
                    <h3 className="user_title">Add Plot</h3> 
                    <button onClick={sendToNext} className="display_button">+</button>
                </div>
                <div className="display_bed_empty">
                    <p className="new_plot_info">
                      Each section in your new garden plot will symbolize a 1ft x 1ft section of your garden!
                    </p>
                </div>
                <div className="change_plot_buttons">
                    <button className="display_button">←</button>
                    <button className="display_button">→</button>
                </div>
                </>
              :
                <>
                  <div className="user_header">
                    <h3 className="user_title">{month}</h3> 
                    <div className="user_header_buttons">
                      <IconButton onClick={() => history.push('/editplot')}><EditIcon/></IconButton>
                      <IconButton onClick={deletePlot}><ClearIcon/></IconButton>
                      <IconButton onClick={sendToNext}>+</IconButton>
                    </div>
                  </div>
                  <div className="display_bed">
                  {plot.map((div, i) => (  /* creates 24 divs, index = 0 */
                        <div key={i} className={`display_div ${changeBackground(div)}`}> 
                          <div className={`display_icon ${plantColor(div)}`}></div>
                        </div>))} 
                  </div>
                  <div className="change_plot_buttons">
                    <IconButton className="display_button"><ArrowBackIosIcon/></IconButton>
                    <IconButton className="display_button"><ArrowForwardIosIcon/></IconButton>
                  </div>
                </>}
        </div>
    )
}

export default PlotDisplay;