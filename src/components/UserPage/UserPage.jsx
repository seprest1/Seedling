import '../App.css';
import './UserPage.css';
//components
import WelcomeDisplay from './WelcomeDisplay';

function UserPage() {

  return (
    <div className="user_body">
      <div className="user_welcome_display">
        <WelcomeDisplay/>
      </div>
    </div>
  );
}

export default UserPage;
