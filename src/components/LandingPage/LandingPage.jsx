import { useHistory } from 'react-router-dom';
import './LandingPage.css';
//components
import ParalaxBanner from './ParalaxBanner';

function LandingPage() {
  const history = useHistory();
  const onLogin = (event) => {
    history.push('/login');
  };


  return (
    <div className="landing_body">
      <div className="welcome_nav">
          <button className="sign_in_button" onClick={onLogin}>sign in</button>
      </div>
      <ParalaxBanner/>
      <div className="paralax_bottom">
          <h2 className="welcome_subtitle">Ready to play in the dirt?</h2>
          <div className="welcome_prompts">
              <div className="logo">seedling.</div>
              <div className="register_prompt">
                <img src="https://images.pexels.com/photos/5624254/pexels-photo-5624254.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="register_image"/>
                <p>New to Seedling?</p>
                <p>Make an account here.</p>
              </div>
              <div className="info_prompt">
                <img src="https://images.pexels.com/photos/7728883/pexels-photo-7728883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="register_image"/>
                <p>Curious about Seedling?</p>
                <p>More about us.</p>
              </div>
          </div>
        </div> 
    </div>
  );
}

export default LandingPage;

  