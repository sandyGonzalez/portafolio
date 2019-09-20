// Dependencies
// import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import Bluebird from 'bluebird';
// import { Provider } from 'react-redux';

// Routes
import AppRoutes from './routes';

// Assets
import './index.css';

render(
    <Router>
      <AppRoutes />
    </Router>,
  document.getElementById('root')
);