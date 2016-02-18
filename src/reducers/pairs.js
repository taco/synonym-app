import { fromJS } from 'immutable';

import {
    LOAD_PAIRS,
    REMOVE_PAIR,
    ADD_PAIR,
    UPDATE_PAIR
} from '../constants/actionTypes';

const initialState = fromJS({});

export default (state = initialState, action) => {
    switch (action.type) {

    case LOAD_PAIRS:
        return fromJS(action.data);

    case REMOVE_PAIR:
        return state.delete(action.value);

    case UPDATE_PAIR:
        state = state.delete(action.originalValue);

    case ADD_PAIR:
        return state.set(action.value, matchesToList(action.matches));

    default:
        return state;
    }
};

export const matchesToList = matches => {
    return fromJS(
        matches.split(',')
            .map(w => w.trim())
            .filter(w => !!w)
    );
};