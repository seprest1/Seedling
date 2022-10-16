import date from 'date-and-time';
import { useEffect, useState } from 'react';

function FindMonth(){
    const monthArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const monthsFromDB = [0, 1, 2, 3, 4, 6, 8];
    useEffect(() => {
        checkMonth(monthArray);
        changeMonthDisplay;
      }, [interval]);

    const now = new Date();
    const thisYear = date.format(now, 'YYYY');
    const thisMonth = Number(date.format(now, 'M'));
    const thisMonthParsed = date.format(now, 'MMMM');
    const [selectedMonth, setSelectedMonth] = useState('');
    

    const [interval, setInterval] = useState(0);
    const [month, setMonth] = useState(date.format(now, 'MMMM'));

 
    //returns current month, and if no match, the latest month.
    const checkMonth = () => {
        for (let dbMonth of monthsFromDB){     //loops backwards through months in DB
            const month1 = new Date(thisYear, dbMonth, 1, 0);  
            for (let i = thisMonth; i >= 0; i--){  //checks current month and loops backwards through the monthArray
                const monthToCheck = monthArray[i];
                const month2 = new Date(thisYear, monthToCheck, 1, 0); 
                    if (date.isSameDay(month1, month2) === true){   //compares month from DB with month in Array;
                        setSelectedMonth(monthToCheck);
                    }
            }
        }
    }

    const subtractCounter = () => {
        setInterval(interval - 1);
        console.log(interval);
        changeMonthDisplay;
    }

    const addCounter = () => {
        setInterval(interval + 1);
        console.log(interval);
        changeMonthDisplay;
    }

    const changeMonthDisplay = () => {
        const month = date.addMonths(now, interval);
        const newMonth = date.format(month, 'MMMM');
        setMonth(newMonth);
    }


    return(
        <>
        <h1>{month}</h1>
        <button onClick={subtractCounter}>Back</button>
        <button onClick={addCounter}>Forward</button>
        </>
    )

}

export default FindMonth;