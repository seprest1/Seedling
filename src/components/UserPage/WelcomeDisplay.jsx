import { useSelector } from 'react-redux';
//components
import ToDo from './Widgets/ToDo/ToDo';
import Notes from './Widgets/Notes/Notes';
import Weather from './Widgets/Weather/Weather';
import Tips from './Widgets/Tips/GardeningTip';

function WelcomeDisplay(){
    const user = useSelector (store => store.user);
 
    return(
        <div className="user_welcome">
            <div className="welcome_header">
                <h3 className="user_title">Welcome, {user.username}!</h3>
            </div>
            <div className="user_welcome_body">
                <Weather/>
                <ToDo/>
                <Tips/>
                <Notes/>
            </div>
        </div>
    )
}

export default WelcomeDisplay;