import { useDispatch, useSelector } from 'react-redux';

function ShadeBed(){
  //calls shade selected
  const shade = useSelector(store => store.garden.sunKey);
  const plot = useSelector(store => store.garden.plot);
  const month = useSelector(store => store.garden.month);

  //set shade value for that specific div
  const dispatch = useDispatch();
  const setDiv = (location) => {
    const divToSend = {location, shade}
    console.log(divToSend);
    {divToSend.shade && //only allows dispatch if shade is indicated 
      dispatch({
        type: 'SET_SHADE',
        payload: divToSend
      });
    };
  };

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

    return(
        <div className="left_body">
          <div className="left_header">
            <h3 className="left_title">Shade</h3> 
          </div>
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