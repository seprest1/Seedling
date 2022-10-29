import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
//MUI
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
//components
import Div from './Div';


function PlotDisplay(){
  const plot = useSelector(store => store.garden.divs);
  const plotId = useSelector(store => store.garden.selectedPlot.id);
  const displayMonth = useSelector(store => store.garden.date.display);
  const year = useSelector(store => store.garden.date.year);
  const userPlots = useSelector(store => store.garden.userPlots);
  const userId = useSelector(store => store.user.id);
  
  const dispatch = useDispatch();
  const history = useHistory();

  const initialPlotIndex = userPlots.findIndex(plot => plot.id === plotId);
  //toggles between plots when button is clicked                                            
  const addIndex = () => {
    console.log(userPlots);
    console.log(`Current plot index:`, initialPlotIndex);
    const nextPlotIndex = initialPlotIndex + 1;
    if(nextPlotIndex <= userPlots.length-1){ //keeps requests within the confines of array length
        const nextPlotID = userPlots[nextPlotIndex].id;
        dispatch({ type: 'GET_PLOT', payload: nextPlotID });
    };
  };

  //toggles between plots when button is clicked      
  const subtractIndex = () => {
    console.log(userPlots);
    console.log(`Current plot index:`, initialPlotIndex);
    const nextPlotIndex = initialPlotIndex - 1;
    if(nextPlotIndex >= 0){ //keeps requests within the confines of array length
      const nextPlotID = userPlots[nextPlotIndex].id;
      dispatch({ type: 'GET_PLOT', payload: nextPlotID });
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
        dispatch({ type: 'DELETE_PLOT', payload: {plot: plotId, user: userId} });
    }});
  };

  const sendToNext = () => {
    dispatch({ type: 'CLEAR_EVERYTHING' });
    history.push('/newplot/shade');
  };
  
    return(
        <div className="user_plot_display">   
          {!plotId ?      /* if there isn't a plot to display */
                <>  
                <div className="user_header">
                    <h3 className="user_title">Your Plots:</h3> 
                    <Tooltip title="Add Plot" placement="bottom-end">
                      <IconButton onClick={sendToNext}><AddIcon/></IconButton>
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
                      <Tooltip title="Edit" placement="bottom-end">
                          <IconButton onClick={() => history.push(`/editplot/${plotId}`)}><EditIcon/></IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="bottom-end">
                          <IconButton onClick={deletePlot}><ClearIcon/></IconButton>
                      </Tooltip>
                      <Tooltip title="Add New Plot" placement="bottom-end">
                          <IconButton onClick={sendToNext}><AddIcon/></IconButton>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="display_bed">  {/* creates 24 divs, index = 0 */}
                    {plot.map((div, i) => 
                    <Div key={i} i={i} div={div}/>)} 
                  </div>
                  <div className="change_plot_buttons">     {/* opposite because array comes in sorted with future plots first */}
                    <IconButton className="display_button" onClick={addIndex}><ArrowBackIosIcon/></IconButton>
                    <IconButton className="display_button" onClick={subtractIndex}><ArrowForwardIosIcon/></IconButton>
                  </div>
                </>} 
        </div>
    );
};

export default PlotDisplay;