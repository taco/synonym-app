import { fromJS } from 'immutable';

import {
    LOAD_PAIRS,
    START_EDIT,
    START_CREATE,
    ADD_PAIR,
    UPDATE_PAIR
} from '../constants/actionTypes';

const initialState = fromJS({
    page: 'grid'
});

export default (state = initialState, action) => {
    switch (action.type) {

    case LOAD_PAIRS:
    case ADD_PAIR:
    case UPDATE_PAIR:
        return state.set('page', 'grid');

    case START_CREATE:
    case START_EDIT:
        return state.set('page', 'create');

    default:
        return state;
    }
};