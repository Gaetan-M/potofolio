import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App/App.js';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import './animate.css'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {requestProjet} from './container/Redux/reducer.js'

const logger=createLogger();
const rootReducers=combineReducers({requestProjet})
const store=createStore(rootReducers,applyMiddleware(thunkMiddleware,logger))

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
