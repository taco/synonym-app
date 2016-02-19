import { fromJS } from 'immutable';

import {
    LOAD_PAIRS,
    REMOVE_PAIR,
    ADD_PAIR,
    UPDATE_PAIR
} from '../constants/actionTypes';

const initialState = fromJS([]);

export default (state = initialState, action) => {
    switch (action.type) {

    case LOAD_PAIRS:
        return fromJS(action.data);

    case REMOVE_PAIR:
        return state.delete(action.index);

    case UPDATE_PAIR:
        return state.set(
            action.index,
            getPair(action.value, action.matches)
        );

    case ADD_PAIR:
        return state.push(
            getPair(action.value, action.matches)
        );

    default:
        return state;
    }
};

export const getPair = (value, matches) => {
    const pair = {
        synonyms: matchesToArray(matches),
        unsaved: true
    };

    if (value && value.trim()) {
        pair.key = value.trim();
    }

    return fromJS(pair);
};

export const matchesToArray = matches => {
    return matches.split(',')
            .map(w => w.trim())
            .filter(w => !!w);
};