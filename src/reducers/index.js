import { combineReducers } from 'redux';
import { PAIRS_REDUCER } from '../constants';
import pairs from './pairs';

export default combineReducers({
    [PAIRS_REDUCER]: pairs
});