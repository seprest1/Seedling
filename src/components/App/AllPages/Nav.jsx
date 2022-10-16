import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';

function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
 
  return (
    <div className="nav"> 
      <div className="nav_header">
        <h1 className="nav_title">seedling.</h1>
      </div>
      <div className="nav_links">   
        <Link className="nav_link" to="/about">
          about
        </Link>
                                   {/* user not logged in */}
        {!user.id && <Link className="nav_link" to="/login"> sign in </Link>}
        
        {user.id && <>             {/* user logged in */}
            <Link className="nav_link" to="/user"> home </Link>
            <Link className="nav_link" to="/info"> info </Link>
            <button className="nav_button" onClick={() => dispatch({ type: 'LOGOUT'})}> log out </button></>}
        </div>     
    </div>
  );
}

export default Nav;
