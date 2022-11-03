import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';

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
          <button className="nav_button" onClick={() => history.push('/about')}>about</button>
          <button className="nav_button" onClick={() => logout()}>log out</button>
        </div>  
        :
        <div className="nav_links">           {/* user not logged in */}  
          <button className="nav_button" onClick={() => history.push('/about')}>about</button>
          <button className="nav_button" onClick={() => history.push('/login')}>sign in</button>
        </div>     
          }  
    </div>
  );
}

export default Nav;
