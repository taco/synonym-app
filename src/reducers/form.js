import { fromJS } from 'immutable';

import {
    START_EDIT,
    START_CREATE,
    UPDATE_KEY,
    UPDATE_VALUES
} from '../constants/actionTypes';

const initialState = fromJS({
    key: '',
    values: '',
    originalKey: ''
});

export default (state = initialState, action) => {
    switch (action.type) {

    case START_EDIT:
        return fromJS({
            key: action.value,
            index: action.index,
            values: action.matches.toJS().join(', ')
        });

    case START_CREATE:
        return initialState;

    case UPDATE_KEY:
        return state.set('key', action.value);

    case UPDATE_VALUES:
        return state.set('values', action.value);

    default:
        return state;
    }
};