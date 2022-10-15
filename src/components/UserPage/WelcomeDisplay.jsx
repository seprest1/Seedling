import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
//components
import LogOutButton from '../App/AllPages/LogOutButton/LogOutButton';

function WelcomeDisplay(){
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const sendToNext = () => {
      history.push('/newplot/form');
      dispatch({ type: 'CLEAR_EVERYTHING' });
    }  
    return(
        <div className="user_welcome">
             <div className="user_header">
                <h3 className="user_title">Welcome, {user.username}!</h3>
            </div>
            <p>Your ID is: {user.id}</p>
            <button onClick={sendToNext} className="button">Add New Plot!</button>
            <LogOutButton className="button" />
        </div>
    )
}

export default WelcomeDisplay;