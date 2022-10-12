import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function ShadeBed(){
  //calls shade selected
  const sun = useSelector(store => store.garden.sunKey);
  const plot = useSelector(store => store.garden.plot);

  //set shade value for that specific div
  const dispatch = useDispatch();
  const setDiv = (divNum) => {
    const divToSend = {location: divNum, shade: sun}
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

  //allows user to edit Month, then dispatch value
  const [showMonth, setShowMonth] = useState(true);
  const month = useSelector(store => store.month);
  const setMonth = (month) => {
    dispatch({ type: 'SET_MONTH', payload: month});
    setShowMonth(!showMonth);
  }


    return(
        <div className="plot_display">
          <div className="month">
            {showMonth === true ?   //conditionally render header, when clicking edit-mode
                  <>
                    <h3 className="month_h3">{month}</h3> 
                    <button className="month_button" onClick={setMonth}>✎</button>
                  </>
                  : 
                  <select className="month_select"
                      onChange={(e) => setMonth(e.target.value)}>
                          <option value="January">January</option>
                          <option value="February">February</option>
                          <option value="March">March</option>
                          <option value="April">April</option>
                          <option value="May">May</option>
                          <option value="June">June</option>
                          <option value="July">July</option>
                          <option value="August">August</option>
                          <option value="September">September</option>
                          <option value="October">October</option>
                          <option value="November">November</option>
                          <option value="December">December</option>
                    </select>}
          </div>
          <div className="shade_bed">
              {plot.map((div, i) => (  /* creates 24 divs, index = 0 */
              <div key={i}   
                  className={`garden_bed ${changeBackground(div)}`}                    
                  onMouseOver={() => setDiv(i)}> 
              </div>))} 
          </div>
        </div>
    )
}

export default ShadeBed;