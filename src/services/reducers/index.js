import { combineReducers } from 'redux';


import app from './app';
import shared from './shared';

export default combineReducers({
    app,
    shared
});