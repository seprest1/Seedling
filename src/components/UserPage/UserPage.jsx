import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './UserPage.css';
//components
import WelcomeDisplay from './WelcomeDisplay';
import PlotDisplay from './PlotDisplay/PlotDisplay';

function UserPage() {
  const dispatch = useDispatch();
  const weather_key = useSelector(store => store.user.weather_key);
  useEffect(() => {
    dispatch({ type: 'FETCH_WEATHER', payload: weather_key });
  }, []);

  return (
    <div className="user_body">
      <div className="user_welcome_display">
           <PlotDisplay/>
           <WelcomeDisplay/>
        </div>
    </div>
  );
}

export default UserPage;
