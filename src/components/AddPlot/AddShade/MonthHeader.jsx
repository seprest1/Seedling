import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import moment from 'moment';

function MonthHeader(){
    const dispatch = useDispatch();

    const monthDisplay = useSelector(store => store.garden.date.display);
    const [showMonth, setShowMonth] = useState(true);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const setMonthAndYear = () => {
        dispatch({ type: 'SET_DATE', payload: {month: Number(month), year: Number(year), display: moment().month(month).format('MMMM')} });
        setShowMonth(!showMonth)
      }
  
    return(
        <>
        {showMonth === true ?    //conditionally render header, when clicking edit-mode
            <div className="left_header">
                <h3 className="left_title">{monthDisplay}</h3> 
                <button className="selected_button month_button edit" onClick={() => setShowMonth(!showMonth)}>✎</button>
            </div>
                : 
            <div className="left_header">
                <select 
                    required
                    className="month_select"
                    defaultValue={0}
                    onChange={(e) => setMonth(e.target.value)}>  {/* starts at 0, because in moment.js i=0 */}
                    <option value={0} className="month_option">January</option> 
                    <option value={1} className="month_option">February</option>
                    <option value={2} className="month_option">March</option>
                    <option value={3} className="month_option">April</option>
                    <option value={4} className="month_option">May</option>
                    <option value={5} className="month_option">June</option>
                    <option value={6} className="month_option">July</option>
                    <option value={7} className="month_option">August</option>
                    <option value={8} className="month_option">September</option>
                    <option value={9} className="month_option">October</option>
                    <option value={10} className="month_option">November</option>
                    <option value={11} className="month_option">December</option>
                </select>
                <select 
                    required
                    className="month_select"
                    defaultValue={2020}
                    onChange={(e) => setYear(e.target.value)}>
                    <option value={2020} className="month_option">2020</option>
                    <option value={2021} className="month_option">2021</option>
                    <option value={2022} className="month_option">2022</option> 
                    <option value={2023} className="month_option">2023</option>
                    <option value={2024} className="month_option">2024</option>
                    <option value={2025} className="month_option">2025</option>
                </select>    
                <button className="icon_button month_button" onClick={setMonthAndYear}>✓</button>
            </div>}
        </>
    )
}

export default MonthHeader;