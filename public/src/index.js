import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';

const app = document.getElementById('app');

ReactDOM.render((
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
), app);