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
import PopperUnstyled from '@mui/base/PopperUnstyled';
//components
import Div from './Div';

function PlotDisplay(){
  const plot = useSelector(store => store.garden.plot);
  const plotId = useSelector(store => store.garden.plotID);
  const displayMonth = useSelector(store => store.garden.date.display);
  const year = useSelector(store => store.garden.date.year);
  const dispatch = useDispatch();
  const history = useHistory();
  const sendToNext = () => {
    dispatch({ type: 'CLEAR_EVERYTHING' });
    history.push('/newplot/shade');
  }  

  //toggles between plots when button is clicked
  const userPlots = useSelector(store => store.garden.userPlots);
  const changePlotDisplay = (value) => {
    const currentPlotIndex = userPlots.findIndex(plot => plot.id === plotId);
    const newPlotIndex = currentPlotIndex + value;
  
    if (newPlotIndex){ //if there's no further plot, don't send request
      const newPlot = userPlots[newPlotIndex];
      const newPlotId = newPlot.id;

      console.log('Current plot is:', userPlots[currentPlotIndex]);
      console.log('Next plot is:', newPlot);

      dispatch({ type: 'CLEAR_EVERYTHING' });
      dispatch({ type: 'GET_PLOT', payload: {plot_id: newPlotId} });
      }
  }

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
                </>
              :
                <>
                  <div className="user_header">
                    <h3 className="user_title">{displayMonth}, {year}</h3> 
                    <div className="user_header_buttons">
                      <IconButton onClick={() => history.push('/editplot')}><EditIcon/></IconButton>
                      <IconButton onClick={deletePlot}><ClearIcon/></IconButton>
                      <IconButton onClick={sendToNext}>+</IconButton>
                    </div>
                  </div>
                  <div className="display_bed">  {/* creates 24 divs, index = 0 */}
                    {plot.map((div, i) => 
                    <Div key={i} i={i} div={div}/>)} 
                  </div>
                  <div className="change_plot_buttons">     {/* opposite because array comes in sorted with future plots first */}
                    <IconButton className="display_button" onClick={() => changePlotDisplay(1)}><ArrowBackIosIcon/></IconButton>
                    <IconButton className="display_button" onClick={() => changePlotDisplay(-1)}><ArrowForwardIosIcon/></IconButton>
                  </div>
                </>} 
        </div>
    )
}

export default PlotDisplay;