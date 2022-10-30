import './UserPage.css';
//components
import WelcomeDisplay from './WelcomeDisplay';
import PlotDisplay from './PlotDisplay/PlotDisplay';

function UserPage() {

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
