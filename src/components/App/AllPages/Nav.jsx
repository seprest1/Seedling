import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
//components
import LoginForm from '../../LandingPage/LoginForm';

function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
 
  return (
    <div className="nav"> 
      <div className="nav_header">
        <Link to="/home" className="nav_title">seedling.</Link>
      </div>
      <div className="nav_links">   
        <Link to="/about" className="nav_link">about</Link>

        {!user.id && <Link to='/login' className="nav_link">login</Link>}

        {user.id && <>             {/* user logged in */}
            <Link to="/user" className="nav_link"> home </Link>
            <button className="nav_button" onClick={() => dispatch({ type: 'LOGOUT'})}> log out </button></>}
        </div>     
    </div>
  );
}

export default Nav;
