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
        console.log('udpdate', action.index);
        return state.set(action.index, fromJS({
            key: action.value,
            synonyms: matchesToArray(action.matches)
        }));

    case ADD_PAIR:
        return state.push(fromJS({
            key: action.value,
            synonyms: matchesToArray(action.matches)
        }));

    default:
        return state;
    }
};

export const matchesToArray = matches => {
    return matches.split(',')
            .map(w => w.trim())
            .filter(w => !!w);
};