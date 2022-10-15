import '../App.css';
import './UserPage.css';
//components
import PlotDisplay from './PlotDisplay';
import WelcomeDisplay from './WelcomeDisplay';

function UserPage() {

  return (
    <div className="user_body">
      <div className="user_welcome_display">
        <WelcomeDisplay/>
      </div>
      <div className="user_plot_display">
        <PlotDisplay/>
      </div>
    </div>
  );
}

export default UserPage;
