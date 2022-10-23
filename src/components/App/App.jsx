import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';

//components
import Nav from './AllPages/Nav';
import AboutPage from '../AboutPage/AboutPage';
import InfoPage from '../InfoPage/InfoPage';
import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import PlantForm from '../AddPlot/AddShade/PlantForm/PlantForm';
import AddShade from '../AddPlot/AddShade/AddShade';
import AddPlants from '../AddPlot/AddPlants/AddPlants';
import EditPlot from '../EditPlot/EditPlot/EditPlot';
import EditPlants from '../EditPlot/EditPlants/EditPlants';
import LoginForm from '../LandingPage/LoginForm';
import RegisterForm from '../LandingPage/RegisterForm';

//MUI
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';


function App() {
  
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  //MUI Theme
  const theme = createTheme({ 
      palette: {
        type: 'light',
        primary: {
          main: '#d64946',
          contrastText: '#f5f5f5',
          dark: '#ce3e16',
          light: '#d66446',
        },
        secondary: {
          main: '#c7c71f',
          dark: '#b5b522',
        },
        error: {
          main: '#f07167',
        },
        warning: {
          main: '#ff9800',
        },
        success: {
          main: '#f6bd60',
        },
        background: {
          default: '#f5f5f5',
          paper: '#f5f5f5',
        },
        text: {
          primary: 'rgba(65,40,40,0.87)',
          secondary: 'rgba(41,30,30,0.87)',
        },
        info: {
          main: '#436b0b',
        },
        typography: {
          subtitle1: {
            fontFamily: 'Droid Sans',
          },
          button: {
            fontFamily: 'Droid Sans',
            fontWeight: 300,
            letterSpacing: '0.09em',
          },
          caption: {
            fontFamily: 'Droid Sans',
          },
          h3: {
            fontFamily: 'Droid Sans',
          },
          body1: {
            fontFamily: 'Droid Sans',
          },
          subtitle2: {
            fontFamily: 'Droid Sans',
          },
          h6: {
            fontFamily: 'Droid Sans',
          },
          h5: {
            fontFamily: 'Droid Sans',
          },
          h4: {
            fontFamily: 'Droid Sans',
          },
          overline: {
            fontFamily: 'Droid Sans',
          },
          link:{
            fontFamily: 'Droid Sans',
          },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <ParallaxProvider>
      <div className="body">
        <Nav/>
        <Switch >
        
          <Redirect exact from="/" to="/home" />     {/* Visiting localhost:3000 will redirect to localhost:3000/home */}

          <Route exact path="/about">
            <AboutPage/>
          </Route>

          <Route exact path="/info">
            <InfoPage/>
          </Route>

          <Route exact path="/register">
          {user.id ? <Redirect to="/user"/>
              :
            <LandingPage routeProp={'register'}/>}
          </Route>

          <Route exact path="/login">
          {user.id ? <Redirect to="/user"/>
              :
            <LandingPage routeProp={'login'}/>}
          </Route>

          <ProtectedRoute exact path="/user">  {/* logged in shows UserPage else shows LoginPage*/}
            <UserPage/>
          </ProtectedRoute> 

          <ProtectedRoute exact path="/newplot/form">
            <PlantForm/>
          </ProtectedRoute>
      
          <ProtectedRoute exact path="/newplot/shade">
            <AddShade/>
          </ProtectedRoute>

          <ProtectedRoute exact path="/newplot/plants">
            <AddPlants/>
          </ProtectedRoute>

          <ProtectedRoute exact path="/editplot/:id">
            <EditPlot/>
          </ProtectedRoute>

          <ProtectedRoute exact path="/editplot/:id/plants">
            <EditPlants/>
          </ProtectedRoute>

          <Route exact path="/home">
            {user.id ? <Redirect to="/user"/>
              :
              <LandingPage dialogOpen={false}/>}
          </Route>

          <Route>
            <h1>404</h1>
          </Route>

        </Switch>

      </div>
    </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
