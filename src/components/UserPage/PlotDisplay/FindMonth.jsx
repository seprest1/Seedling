import { useEffect, useState } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

function FindMonth(){
    const dispatch = useDispatch();
    const user_id = useSelector(store => store.user.id);
    useEffect(() => {
        dispatch({ type: "GET_USER_PLOTS", payload: user_id });
      }, []);
    
    const currentYear = moment().format('YYYY');
    const currentMonth = moment().format('MM');
    const userPlots = useSelector(store => store.garden.userPlots);
    console.log(currentYear, currentMonth, userPlots);

    // const findInitialPlot = () => {
    //     for (let i = (userPlots.length - 1); i >= 0; i--){
    //         const plot = userPlots[i];
    //         if (plot.year === currentYear && plot.month === currentMonth){
    //             console.log(plot);
    //         }
    //         else if (plot.year === currentYear && plot.month < currentMonth){
    //             console.log(plot);
    //         }
    //     }
    // };
    
   

    // const subtractCounter = () => {
    //     setMonth(month.subtract(1, "month"));
    //     setDisplayMonth(month.format('MMMM'));
    //     console.log(month.format('YYYY'));
    //     checkMonth();
    // }

    // const addCounter = () => {
    //     setDisplayMonth(month.add(1, "month").format('MMMM'));
    //     console.log(month.format('YYYY'));
    //     checkMonth();
    // }

   //returns current month, and if no match, the latest month.
//    const checkMonth = () => {
    // for (let plot of monthsFromDB){ 
    //     console.log(currentMonth.format('YYYY'));
    //     if (plot.year === currentMonth.format('YYYY')){
    //         console.log(plot.year);
    //     }
    // }};   


    return(
        <>
          {/* <h1>{displayMonth}</h1>
          <button onClick={subtractCounter}>-</button>
          <button onClick={addCounter}>+</button> */}
          {/* <button onClick={findInitialPlot}>hi</button> */}
        </>
    )

};

export default FindMonth;
