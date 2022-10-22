import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App/App';
import { HashRouter as Router} from "react-router-dom";


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App className="app"/>
    </Provider>
  </Router>,
  document.getElementById('react-root'),
);
