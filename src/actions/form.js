import {
    START_EDIT,
    START_CREATE,
    UPDATE_KEY,
    UPDATE_VALUES,
    CANCEL
} from '../constants/actionTypes';

import { addAsync, updateAsync } from './pairs';

export const cancel = () => {
    return {
        type: CANCEL
    };
};

export const edit = (value, matches) => {
    return {
        type: START_EDIT,
        value,
        matches
    };
};

export const create = () => {
    return {
        type: START_CREATE
    };
};

export const updateKey = value => {
    return {
        type: UPDATE_KEY,
        value
    };
};

export const updateValues = value => {
    return {
        type: UPDATE_VALUES,
        value
    };
};

export const save = state => {
    return dispatch => {
        const originalValue = state.get('originalKey');
        const value = state.get('key');
        const matches = state.get('values');

        if (originalValue) {
            dispatch(
                updateAsync(originalValue, value, matches)
            );
        }
        else {
            dispatch(
                addAsync(value, matches)
            );
        }
    };
};