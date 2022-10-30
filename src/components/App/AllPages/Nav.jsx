import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
//components
import LoginForm from '../../LandingPage/LoginForm';

function Nav() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
 
  const goHome = () => {
    dispatch({ type: 'CLEAR_EVERYTHING' });
    dispatch({ type: 'GET_USER_PLOTS', payload: user.id });
    history.push('/home');
  }

  const logout = () => {
    dispatch({ type: 'CLEAR_EVERYTHING' });
    dispatch({ type: 'LOGOUT'});
  }

  return (
    <div className="nav"> 
      <div className="nav_header">
        <div className="nav_title" onClick={goHome}>seedling.</div>
      </div>
      {user.id ?   
        <div className="nav_links">            {/* user logged in */}
          <button className="nav_button" onClick={goHome}>home</button>
          <Link to="/about" className="nav_link">about</Link>
          <button className="nav_button" onClick={() => logout()}>log out</button>
        </div>  
        :
        <div className="nav_links">           {/* user not logged in */}  
          <Link to="/about" className="nav_link">about</Link>
          <Link to='/login' className="nav_link">login</Link>
        </div>     
          }  
    </div>
  );
}

export default Nav;
