import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';

//components
import Header from './AllPages/Header/Header';
import Nav from './AllPages/Nav/Nav';
import Footer from './AllPages/Footer/Footer';
import AboutPage from '../AboutPage/AboutPage';
import InfoPage from '../InfoPage/InfoPage';
import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LandingPage/LoginPage/LoginPage';
import RegisterPage from '../LandingPage/RegisterPage/RegisterPage';
import PlantForm from '../AddPlot/PlantForm/PlantForm';
import AddShade from '../AddPlot/AddShade/AddShade';
import AddPlants from '../AddPlot/AddPlants/AddPlants';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div className="body">
        <Header/>
        <Nav/>
        <Switch>
        
          <Redirect exact from="/" to="/home" />     {/* Visiting localhost:3000 will redirect to localhost:3000/home */}

          <Route exact path="/about">
            <AboutPage/>
          </Route>

          <ProtectedRoute exact path="/user">  {/* logged in shows UserPage else shows LoginPage*/}
            <UserPage/>
          </ProtectedRoute> 

          <ProtectedRoute exact path="/info">
            <InfoPage/>
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

          <Route exact path="/login"> {/* if user isn't logged in, redirect to login page*/}
            {user.id ? <Redirect to="/user"/>
              :
              <LoginPage/>}
          </Route>

          <Route exact path="/registration"> {/* if user is already logged in, redirect to user page*/}
            {user.id ? <Redirect to="/user"/>
              :
              <RegisterPage/>}
          </Route>

          <Route exact path="/home">
            {user.id ? <Redirect to="/user"/>
              :
              <LandingPage/>}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>

        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
