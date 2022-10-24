import { useState, useEffect } from 'react';
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
  
  const dispatch = useDispatch();
  const history = useHistory();

  const userPlots = useSelector(store => store.garden.userPlots);
  const initialPlotIndex = userPlots.findIndex(plot => plot.id === plotId);
  // useEffect(() => {
  //   setNextPlotIndex(initialPlotIndex);
  // }, []);

 

  //toggles between plots when button is clicked                                            
  const [nextPlotIndex, setNextPlotIndex] = useState(0);
  const addIndex = () => {
    console.log(`Current plot is indexed at ${nextPlotIndex}`);
    if(nextPlotIndex <= userPlots.length-1){ //keeps requests within the confines of array length
      console.log('adding 1');
      setNextPlotIndex(nextPlotIndex + 1); 
      changePlotDisplay();
    }
    else{
      console.log(nextPlotIndex);
    }
  }

  const subtractIndex = () => {
    console.log(`Current plot is indexed at ${nextPlotIndex}`);
    if(nextPlotIndex >= 1){
      console.log('current index', nextPlotIndex);
      console.log('subtracting 1');
      const pleaseWork = (nextPlotIndex - 1);
      setNextPlotIndex(pleaseWork);
      changePlotDisplay();
    }
    else{
      console.log(nextPlotIndex);
    }
  }

  const changePlotDisplay = () => {
      const [newPlot] = userPlots.filter((plot, i) => i === nextPlotIndex);
      console.log(newPlot);
      console.log(`Next plot is indexed at ${nextPlotIndex}`);

      if (newPlot){
        dispatch({ type: 'CLEAR_EVERYTHING' });
        dispatch({ type: 'GET_PLOT', payload: newPlot.id });
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

  const sendToNext = () => {
    dispatch({ type: 'CLEAR_EVERYTHING' });
    history.push('/newplot/shade');
  }  
  
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
                      <IconButton onClick={() => history.push(`/editplot/${plotId}`)}><EditIcon/></IconButton>
                      <IconButton onClick={deletePlot}><ClearIcon/></IconButton>
                      <IconButton onClick={sendToNext}><AddIcon/></IconButton>
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
    )
}

export default PlotDisplay;