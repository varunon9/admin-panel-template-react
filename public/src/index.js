import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import AppReducer from './reducers/AppReducer';
import AppRoutes from './containers/AppRoutes';

const store = createStore(AppReducer, applyMiddleware(thunk));
const app = document.getElementById('app');

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
), app);
