import './UserPage.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//components
import WelcomeDisplay from './WelcomeDisplay';
import PlotDisplay from './PlotDisplay/PlotDisplay';

function UserPage() {
  const dispatch = useDispatch();
  const user = useSelector (store => store.user);
  useEffect(() => {
    dispatch({ type: 'GET_PLOT', payload: user.id});
  }, []);

  return (
    <div className="user_body">
      <div className="user_welcome_display">
          <WelcomeDisplay/>
           <PlotDisplay/>
        </div>
    </div>
  );
}

export default UserPage;
