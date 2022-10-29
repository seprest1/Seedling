import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Select from 'react-select';
import moment from 'moment';
//MUI
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { OptionUnstyled } from '@mui/base';

function MonthHeader(){
    const dispatch = useDispatch();
    const [showMonth, setShowMonth] = useState(true); //toggle for month input
    const displayMonth = useSelector(store => store.garden.date.display);


    const monthOptions = [
        { value: 1, text: "January" }, 
        { value: 2, text: "February" },
        { value: 3, text: "March" },
        { value: 4, text: "April" },
        { value: 5, text: "May" },
        { value: 6, text: "June" },
        { value: 7, text: "July" },
        { value: 8, text: "August" },
        { value: 9, text: "September" },
        { value: 10, text: "October" },
        { value: 11, text: "November" },
        { value: 12, text: "December" }];
 
    const yearOptions = [{ value: 2020 }, { value: 2021 }, { value: 2022 }, { value: 2023 }, { value: 2024 }, { value: 2025 }];

    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2020);
    const handleMonth = (e) => {
        const month = e.target.value
        setMonth(month);
        dispatch({ type: 'SET_MONTH', payload: {month, display: moment().month(month - 1).format('MMMM')}  })
    }

    const handleYear = (e) => {
        const year = e.target.value;
        setYear(year)
        dispatch({ type: 'SET_YEAR', payload: year });
        // setShowMonth(!showMonth);
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
                    className="month_select"
                    onChange={(e) =>  handleMonth(e)}>
                    <option value={0} hidden>January</option>
                    {monthOptions.map((option, i) => 
                        <option value={option.value} key ={i}>{option.text}</option>
                        )}
                </select>
                <select 
                    className="month_select"
                    defaultValue={{ value: 1, label: "January" }}
                    onChange={(e) => handleYear(e)}>
                    <option value={0} hidden>2020</option>
                    {yearOptions.map((option, i) => 
                        <option value={option.value} key ={i}>{option.value}</option>
                        )}
                </select>    
            </div>}
        </>
    )
}

export default MonthHeader;