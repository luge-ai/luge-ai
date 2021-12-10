import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {reducers} from './reducers';

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);
