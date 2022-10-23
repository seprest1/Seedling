import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Weather.css';
//MUI
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Weather (){
    const dispatch = useDispatch();
    const zipcode = useSelector(store => store.user.zipcode);
    // useEffect(() => {
    //     dispatch({ type: 'FETCH_WEATHER', payload: zipcode });
    //   }, []);

    //assigns weather with image
    const weatherIcon = (iconNumber) => {
        switch(iconNumber){
            case 1: case 2: case 3: case 30: case 33:            //sun
                return `/Images/weather/sun.png`;
            case 4: case 5: case 6: case 7: case 8: case 11:    //cloudy
                return `/Images/weather/cloudy.png`;
            case 12: case 13: case 18: case 39: case 40:        //rainy
                return `/Images/weather/rain.png`;
            case 15: case 16: case 17: case 41: case 42:        //thunderstorms
                return `/Images/weather/storm.png`;
            case 19: case 20: case 21: case 43:                 //flurries
                return `/Images/weather/snowing.png`;
            case 22: case 23: case 44:                          //snow
                return `/Images/weather/snowflake.png`;
            case 24: case 31:                                   //ice
                return `/Images/weather/cold.png`;
            case 25: case 26: case 29:                          //freezing rain
                return `/Images/weather/rainy.png`;
            case 14:                                            //sunshowers
                return `/Images/weather/rainy-day.png`;
            case 32:                                            //wind  
                return `/Images/weather/windy.png`;
            case 34: case 35: case 36: case 37: case 38:        //night-cloudy
                return `/Images/weather/cloudy-night.png`;  
            default: 
                return `/Images/weather/sun.png`;
        };
    };

    return(
        <div className="widget_container weather_container">
            <div className="weather_time">
                <h1 className="weather_day">Monday</h1>
                <h2 className="weather_date">Sept 16th 2022</h2>
                <div className="weather_location">
                    <LocationOnIcon fontSize="xsmall"/>
                    <h2 className="weather_city">Minneapolis, MN</h2>
                </div>
            </div>
            <div className="weather_details">
                <div className="weather_image">
                    <img src={weatherIcon(22)} className="weather_icon"/>
                    <h2 className="weather_type">Sunny</h2>
                </div>
            <h2 className="weather_temp">53°</h2>
            </div>
        </div>
    )
}

export default Weather;