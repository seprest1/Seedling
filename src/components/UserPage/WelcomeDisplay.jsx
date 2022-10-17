import { useSelector } from 'react-redux';
//components
import ToDo from './Widgets/ToDo';
import Notes from './Widgets/Notes';
import Weather from './Widgets/Weather';
import Rain from './Widgets/Rain';

function WelcomeDisplay(){
    const user = useSelector (store => store.user);
 
    return(
        <div className="user_welcome">
            <div className="user_header">
                <h3 className="user_title">Welcome, {user.username}!</h3>
            </div>
            <div className="user_welcome_body">
                <Weather/>
                <ToDo/>
                <Rain/>
                <Notes/>
            </div>
        </div>
    )
}

export default WelcomeDisplay;