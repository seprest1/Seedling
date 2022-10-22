import React from 'react';
import { Route } from 'react-router-dom';
import {useSelector} from 'react-redux';
import LandingPage from '../LandingPage/LandingPage';

function ProtectedRoute({ component, children, ...props }) {
  const user = useSelector((store) => store.user);
  const ProtectedComponent = component || (() => children);

  return (
    <Route
      {...props}
    >
      {user.id ?
        // If the user is logged in, show the protected component
        <ProtectedComponent />
        :
        // Otherwise, redirect to the Landing Page
        <LandingPage />
      }
    </Route>
  );
}

export default ProtectedRoute;
