import React from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

//components
import LogOutButton from '../App/AllPages/LogOutButton/LogOutButton';

function UserPage() {
  const user = useSelector((store) => store.user);

  const sendToNext = () => {
    history.push('/add_plot');
  }
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <button onClick={sendToNext}>Add New Plot!</button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
