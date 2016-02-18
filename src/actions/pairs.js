import {
    LOAD_PAIRS,
    REMOVE_PAIR,
    ADD_PAIR
} from '../constants/actionTypes';

const defaultData = {
    sweater: ['cold', 'jacket'],
    boots: ['tough', 'feet']
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