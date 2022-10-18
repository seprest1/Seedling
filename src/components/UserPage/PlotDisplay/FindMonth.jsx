import { useEffect, useState } from 'react';
import moment from 'moment';

function FindMonth(){
   
    useEffect(() => {
        setDisplayMonth(moment().format('MMMM'));
      }, []);
    
    const [currentMonth, setCurrentMonth] = useState(moment());
    const [displayMonth, setDisplayMonth] = useState();

    const subtractCounter = () => {
        setCurrentMonth(currentMonth.subtract(1, "month"));
        setDisplayMonth(currentMonth.format('MMMM'));
        console.log(currentMonth.format('YYYY'));
        checkMonth();
    }

    const addCounter = () => {
        setDisplayMonth(currentMonth.add(1, "month").format('MMMM'));
        console.log(currentMonth.format('YYYY'));
        checkMonth();
    }


    const monthsFromDB = [{month: 1, year: 2020}, {month: 4, year: 2021}, {month: 5, year: 2021}, {month: 7, year: 2022}, {month: 9, year: 2022}]
   //returns current month, and if no match, the latest month.
   const checkMonth = () => {
    for (let plot of monthsFromDB){ 
        console.log(currentMonth.format('YYYY'));
        if (plot.year === currentMonth.format('YYYY')){
            console.log(plot.year);
        }
    }};   


    return(
        <>
          <h1>{displayMonth}</h1>
          <button onClick={subtractCounter}>-</button>
          <button onClick={addCounter}>+</button>
        </>
    )

};

export default FindMonth;
