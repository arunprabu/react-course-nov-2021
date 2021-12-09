import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Step 1: Setup the Redux store 
import { createStore, applyMiddleware } from 'redux'; // npm i redux

// Step 14: Let's apply middleware
import thunk from 'redux-thunk';  //npm i redux-thunk - use redux-thunk middleware for async actions
import logger from 'redux-logger'; // npm i redux-logger - logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions 

// Step 5: let’s import the combinedReducer / rootReducer
// and pass it to the store as an argument.
import rootReducer from './reducers';

// Step 6: Now the store is properly setup. Provide the store data to the entire app 
import { Provider } from 'react-redux';
//Definition: The Provider component uses something 
  //called as React Context which allows you to pass the 
  //store object to any components 
  //that needs to access it without the need to pass props.
  //Provider should be imported from react-redux 

// Setup Redux Devtools Extension for Debugging
// First Install Chrome Extn
import { composeWithDevTools } from 'redux-devtools-extension'; // npm i redux-devtools-extension

// Step 2: Exec createStore() method and save it in a variable 
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))); //this needs a special param called 'reducer' and an optional enhancer
// Now, After Step 5, store would have dispatch, subscribe properties and app wide data too

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  { /* Step 6 continues.. we have to provide store data to the app */ }
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
