import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Router, hashHistory } from 'react-router';
import routes from './routes';

import configureStore from './redux/store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();
ReactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory} routes={routes}/>
	</Provider>,
  document.getElementById('root')
);
