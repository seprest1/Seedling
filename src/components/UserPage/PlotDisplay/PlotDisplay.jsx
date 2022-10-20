import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import swal from 'sweetalert';
//MUI
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Tooltip from '@mui/material/Tooltip';
//components

function PlotDisplay(){
  const plot = useSelector(store => store.garden.plot);
  const plotId = useSelector(store => store.garden.plotID);
  const month = useSelector(store => store.garden.date.display);
  const dispatch = useDispatch();
  const history = useHistory();
  const sendToNext = () => {
    dispatch({ type: 'CLEAR_EVERYTHING' });
    history.push('/newplot/shade');
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
          {!plotId ?      /* if there isn't a plot to display */
                <>  
                <div className="user_header">
                    <h3 className="user_title">Your Plots:</h3> 
                    <Tooltip title="Add Plot" placement="bottom-end">
                      <button onClick={sendToNext} className="display_button add_plot_button">+</button>
                    </Tooltip>
                </div>
                <div className="display_bed_empty">
                    <p className="new_plot_info">Each section in your new garden plot will symbolize a 1ft x 1ft section of your garden!</p>
                      <br/>
                    <p className="new_plot_info">Visit our design studio to select sunlight values for your garden plot, select plants, set subvarities and start planning out your dream garden!</p>
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
                          <div className={`display_icon ${div.color}`}><img src={`${div.icon}`} className="display_vector"/></div>
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