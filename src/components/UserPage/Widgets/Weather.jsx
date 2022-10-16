import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Weather (){
    const dispatch = useDispatch();
    const zipcode = useSelector(store => store.user.zipcode);
    useEffect(() => {
        dispatch({ type: 'FETCH_WEATHER', payload: zipcode });
      }, []);

    
    

    return(
        <div className="widget_container">
            <h1>Weather</h1>
        </div>
    )
}

export default Weather;