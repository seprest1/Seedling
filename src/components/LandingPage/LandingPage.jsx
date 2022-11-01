import { useHistory } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import './LandingPage.css';
//components
import ParalaxBanner from './ParalaxBanner';
import Footer from '../App/AllPages/Footer';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

function LandingPage({routeProp}) {
  const history = useHistory();

  return (
    <div className="landing_body"> 
      <ParalaxBanner/>
      <div className="landing_bottom">
        <Parallax speed={-10} translateY={['-100px', '70px']}>
          <h2 className="welcome_subtitle">ready to play in the dirt?</h2>
          </Parallax>
          <div className="break"/>
            <div className="landing_blurb">
                <Parallax speed={-20} translateY={['0px', '30px']}>
                  <div className="logo">seedling.</div> 
                </Parallax>
                <Parallax speed={10}>
                  <p className="blurb">
                    There are countless books, resources, and online forums that a new gardener has access to, but the information can be overwhelming 
                    when creating a new project. What to plant, where to plant it, when to plant, what to place it next to, those are just the very basics 
                    when creating a garden bed. Even seasoned gardeners learn throughout the years, what works and what doesn’t, collecting this information 
                    to use for the next growing season. Seedling is a desktop application that allows users to plan their garden, collect notes and learn 
                    general gardening information. It is interactive and intuitive, simple and complete, to make the process of getting started easier, 
                    and allow you to get in the dirt sooner. 
                  </p>
                </Parallax>
            </div>
          <div className="break"/>
          <div className="welcome_prompts">
              <div className="prompts">
                <div className="register_prompt">
                      <img src="https://images.pexels.com/photos/5624254/pexels-photo-5624254.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="register_image"/>
                      <p>New to Seedling?</p>
                      <button onClick={() => history.push('/register')} className="prompt_button">Make Account</button>
                </div>
                <div className="info_prompt">
                      <img src="https://images.pexels.com/photos/7728883/pexels-photo-7728883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="register_image"/>
                      <p>Curious about our start?</p>
                      <button onClick={() => history.push('/about')} className="prompt_button">Learn More</button>
                </div>
              </div>
          </div>
          {/*if routed to login or user, use dialog*/}
          {routeProp === 'register' && <RegisterForm/>}
          {routeProp === 'login' && <LoginForm/>}
          <Footer/>
        </div> 
    </div>
  );
}

export default LandingPage;

  