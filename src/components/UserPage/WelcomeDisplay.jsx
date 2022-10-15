import { useSelector } from 'react-redux';


function WelcomeDisplay(){
    const user = useSelector((store) => store.user);

    return(
        <div className="user_welcome">
            <div className="user_header">
                <h3 className="user_title">Welcome, {user.username}!</h3>
            </div>
            <div className="user_welcome_body">
            </div>
        </div>
    )
}

export default WelcomeDisplay;