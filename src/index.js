import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './Redux/store'
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
     <App />         
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


