import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';
import menuReducer from './redux/menuSlice';
import layoutReducer from './redux/layoutSlice';
import App from './App';
import './index.css';

const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    layout: layoutReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);