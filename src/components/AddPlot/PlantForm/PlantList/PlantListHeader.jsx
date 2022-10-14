import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function PlantListHeader(){
    const dispatch = useDispatch();

    const [showMonth, setShowMonth] = useState(true);
    const month = useSelector(store => store.garden.month);
    const setMonth = (month) => {
        dispatch({ type: 'SET_MONTH', payload: month});
        setShowMonth(!showMonth)
      };
    
    return(
        <>
        {showMonth === true ?    //conditionally render header, when clicking edit-mode
            <div className="right_header">
                <h3 className="right_title">{month}</h3> 
                <button className="selected_button edit" onClick={() => setShowMonth(!showMonth)}>✎</button>
            </div>
                : 
            <div className="right_header">
                <select className="month_select"
                    onChange={(e) => setMonth(e.target.value)}>
                    <option value="January" className="month_option">January</option>
                    <option value="February" className="month_option">February</option>
                    <option value="March" className="month_option">March</option>
                    <option value="April" className="month_option">April</option>
                    <option value="May" className="month_option">May</option>
                    <option value="June" className="month_option">June</option>
                    <option value="July" className="month_option">July</option>
                    <option value="August" className="month_option">August</option>
                    <option value="September" className="month_option">September</option>
                    <option value="October" className="month_option">October</option>
                    <option value="November" className="month_option">November</option>
                    <option value="December" className="month_option">December</option>
                </select>
                <button className="icon_button edit" onClick={() => setShowMonth(!showMonth)}>⨉</button>
            </div>}
        </>
    )
}

export default PlantListHeader;