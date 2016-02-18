import { fromJS } from 'immutable';

import {
    LOAD_PAIRS,
    REMOVE_PAIR,
    ADD_PAIR
} from '../constants/actionTypes';

const initialState = fromJS({});

export default (state = initialState, action) => {
    switch (action.type) {

    case LOAD_PAIRS:
        return fromJS(action.data);

    case REMOVE_PAIR:
        return state.delete(action.value);

    default:
        return state;
    }
};