import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import moment from 'moment';
//MUI
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

function MonthHeader(){
    const dispatch = useDispatch();
    const [showMonth, setShowMonth] = useState(true); //toggle for month input
    const displayMonth = useSelector(store => store.garden.date.display);

    const [monthValue, setMonthValue] = useState(1);
    const handleChange = (e) => {
        dispatch({ type: 'SET_MONTH', payload: monthValue });
        dispatch ({ type: 'SET_DISPLAY', payload: moment().month(monthValue-1).format('MMMM') });
        dispatch({ type: 'SET_YEAR', payload: Number(e.target.value) });
        setShowMonth(!showMonth);
    }

    return(
        <>
        {showMonth === true ?    //conditionally render header, when clicking edit-mode
            <div className="left_header">
                <h3 className="left_title">{displayMonth ? displayMonth : 'Month'}</h3> 
                <IconButton className="selected_button month_button" onClick={() => setShowMonth(!showMonth)}><EditIcon/></IconButton>
            </div>
                : 
            <div className="select_header">
                <select 
                    required
                    value={monthValue}
                    className="month_select"
                    onChange={(e) => setMonthValue(Number(e.target.value))}>  {/* starts at 0, because in moment.js i=0 */} 
                    <option value='' hidden></option> 
                    <option value={1} className="month_option">January</option> 
                    <option value={2} className="month_option">February</option>
                    <option value={3} className="month_option">March</option>
                    <option value={4} className="month_option">April</option>
                    <option value={5} className="month_option">May</option>
                    <option value={6} className="month_option">June</option>
                    <option value={7} className="month_option">July</option>
                    <option value={8} className="month_option">August</option>
                    <option value={9} className="month_option">September</option>
                    <option value={10} className="month_option">October</option>
                    <option value={11} className="month_option">November</option>
                    <option value={12} className="month_option">December</option>
                </select>
                <select 
                    required
                    className="month_select"
                    value={2020}
                    onChange={(e) => handleChange(e)}>
                    <option value={2020} className="month_option">2020</option>
                    <option value={2021} className="month_option">2021</option>
                    <option value={2022} className="month_option">2022</option> 
                    <option value={2023} className="month_option">2023</option>
                    <option value={2024} className="month_option">2024</option>
                    <option value={2025} className="month_option">2025</option>
                </select>    
            </div>}
        </>
    )
}

export default MonthHeader;