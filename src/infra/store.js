import { createStore, applyMiddleware } from 'redux';
import reducers from '../services/reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

export default createStore(
    reducers,
    applyMiddleware(thunk, createLogger())
);