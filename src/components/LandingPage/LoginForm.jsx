import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import '../App/App.css';
//MUI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Link from '@mui/material/Link';

function LoginForm({classProp}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const toggleDialog = () => {
    setOpen(!open);
  };

  const login = (event) => {
    event.preventDefault();
    if (username && password) {
      dispatch({ type: 'LOGIN', payload: {username: username, password: password} });
      setOpen(!open);
    } 
    else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <button onClick={toggleDialog} className={classProp}>sign in</button>
      <Dialog open={open} onClose={toggleDialog}>
        <LockOpenIcon color="primary" className="lock_icon"/>
        {errors.loginMessage ?  //if there's an error, show here
          <DialogTitle textAlign="center" typography="h5">Sign In</DialogTitle>
          :
          <DialogTitle textAlign="center" typography="b1">{errors.loginMessage}</DialogTitle>}
        <DialogContent>
          <TextField autoFocus margin="dense" label="Username" type="text" fullWidth variant="outlined"
                     required  value={username} onChange={(event) => setUsername(event.target.value)}/>
          <TextField autoFocus margin="dense" label="Password" type="password" fullWidth variant="outlined" 
                     required value={password}  onChange={(event) => setPassword(event.target.value)}/>
        <Link href="#" underline="hover" sx={{typography: 'caption'}}>Don't have an account? Register Here</Link>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog}>Cancel</Button>
          <Button onClick={login} type="submit" value="Log In">Log In</Button>
        </DialogActions>
      </Dialog>
    </form>
    
  );
}

export default LoginForm;
