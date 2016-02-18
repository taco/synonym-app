import {
    LOAD_PAIRS,
    REMOVE_PAIR,
    ADD_PAIR,
    UPDATE_PAIR
} from '../constants/actionTypes';

const defaultData = {
    sweater: ['cold', 'jacket'],
    boots: ['tough', 'feet'],
    words: ['some more', 'phrases', 'are here']
};

const asyncDelay = 1;

export const loadAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(load(defaultData));
        }, asyncDelay);
    };
};

export const load = data => {
    return {
        type: LOAD_PAIRS,
        data
    };
};

export const removeAsync = value => {
    return dispatch => {
        setTimeout(() => {
            dispatch(remove(value));
        }, asyncDelay);
    };
};

export const remove = value => {
    return {
        type: REMOVE_PAIR,
        value
    };
};

export const addAsync = (value, matches) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(add(value, matches));
        }, asyncDelay);
    };
};

export const add = (value, matches) => {
    return {
        type: ADD_PAIR,
        value,
        matches
    };
};

export const updateAsync = (originalValue, value, matches) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(upate(originalValue, value, matches));
        }, asyncDelay);
    };
};

export const upate = (originalValue, value, matches) => {
    return {
        type: UPDATE_PAIR,
        originalValue,
        value,
        matches
    };
};