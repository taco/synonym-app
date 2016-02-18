import { combineReducers } from 'redux';
import { PAIRS_REDUCER, VIEW_REDUCER, FORM_REDUCER } from '../constants';
import pairs from './pairs';
import view from './view';
import form from './form';

export default combineReducers({
    [PAIRS_REDUCER]: pairs,
    [VIEW_REDUCER]: view,
    [FORM_REDUCER]: form
});