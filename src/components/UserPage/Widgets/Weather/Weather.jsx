import { useSelector } from 'react-redux';
import moment from 'moment';
import './Weather.css';
//MUI
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Weather (){
    const weather = useSelector(store => store.weather);
    const city = useSelector(store => store.user.city)
    //assigns weather with image
    const weatherIcon = (iconNumber) => {
        switch(iconNumber){
            case 1: case 2: case 3: case 30: case 33:            //sun
                return `/Images/Weather_Icons/sun.png`;
            case 4: case 5: case 6: case 7: case 8: case 11:    //cloudy
                return `/Images/Weather_Icons/cloudy.png`;
            case 12: case 13: case 18: case 39: case 40:        //rainy
                return `/Images/Weather_Icons/rain.png`;
            case 15: case 16: case 17: case 41: case 42:        //thunderstorms
                return `/Images/Weather_Icons/storm.png`;
            case 19: case 20: case 21: case 43:                 //flurries
                return `/Images/Weather_Icons/snowing.png`;
            case 22: case 23: case 44:                          //snow
                return `/Images/Weather_Icons/snowflake.png`;
            case 24: case 31:                                   //ice
                return `/Images/Weather_Icons/cold.png`;
            case 25: case 26: case 29:                          //freezing rain
                return `/Images/Weather_Icons/rainy.png`;
            case 14:                                            //sunshowers
                return `/Images/Weather_Icons/rainy-day.png`;
            case 32:                                            //wind  
                return `/Images/Weather_Icons/windy.png`;
            case 34: case 35: case 36: case 37: case 38:        //night-cloudy
                return `/Images/Weather_Icons/cloudy-night.png`;  
            default: 
                return `/Images/Weather_Icons/sun.png`;
        };
    };

    return(
        <div className="widget_container weather_container">
            <div className="weather_time">
                <h1 className="weather_day">{moment().format('dddd')}</h1>
                <h2 className="weather_date">{moment().format("MMM Do YYYY")}</h2>
                <div className="weather_location">
                    <LocationOnIcon fontSize="xsmall"/>
                    <h2 className="weather_city">{city}</h2>
                </div>
            </div>
            <div className="weather_details">
                <div className="weather_image">
                    <img src={weatherIcon(weather.icon)} className="weather_icon"/>
                    <h2 className="weather_type">{weather.text}</h2>
                </div>
            <h2 className="weather_temp">{weather.temp}°</h2> 
            </div>
        </div>
    )
}

export default Weather;