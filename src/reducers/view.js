import { fromJS } from 'immutable';

import {
    LOAD_PAIRS,
    START_EDIT,
    START_CREATE,
    ADD_PAIR,
    UPDATE_PAIR,
    CANCEL
} from '../constants/actionTypes';

const initialState = fromJS({
    page: 'grid'
});

export default (state = initialState, action) => {
    switch (action.type) {

    // When to mutate state

    default:
        return state;
    }
};