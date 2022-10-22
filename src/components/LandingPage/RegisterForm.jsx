import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';
import './LandingPage.css';
//MUI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [zipcode, setZipcode] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = useState(true);
  const toggleDialog = () => {
    setOpen(!open);
  };

  const registerUser = (e) => {
    e.preventDefault();
    dispatch({ type: 'REGISTER', payload: {username, password, zipcode} });
    history.push('/user');
  }; // end registerUser

  return (
      <>
        <Dialog open={true} onClose={() => history.push('/home')}>
          <LockOpenIcon color="primary" className="lock_icon"/>
          
          {errors.registrationMessage ?  //if there's an error, show here
            <DialogTitle textAlign="center" typography="b1">{errors.registrationMessage}</DialogTitle>
            :
            <DialogTitle textAlign="center" typography="h5">Register</DialogTitle>}

          <DialogContent>
            <TextField autoFocus margin="dense" label="Username" type="text" fullWidth variant="outlined"
                      required  value={username} onChange={(event) => setUsername(event.target.value)}/>

            <TextField autoFocus margin="dense" label="Password" type="password" fullWidth variant="outlined" autoComplete="current-password"
                      required value={password}  onChange={(event) => setPassword(event.target.value)}/>

            <TextField autoFocus margin="dense" label="Zipcode" type="number" fullWidth variant="outlined" 
                      required value={zipcode}  onChange={(event) => setZipcode(event.target.value)}/>

            <Link to={'/login'} className="dialog_link">Already a user? Login here</Link>
          </DialogContent>

          <DialogActions>
            <Button onClick={() => history.push('/home')} varient="outlined">Cancel</Button>
            <Button onClick={registerUser} type="submit" value="Register">Sign Up</Button>
          </DialogActions>
        </Dialog>
      </>
  );
}

export default RegisterForm;
