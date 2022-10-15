import './UserPage.css';
import { useSelector } from 'react-redux';

//components
import WelcomeDisplay from './WelcomeDisplay';
import PlotDisplay from './PlotDisplay';

function UserPage() {

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
