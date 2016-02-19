import { GET, PUT } from '../util/api';

import {
    LOAD_PAIRS,
    REMOVE_PAIR,
    ADD_PAIR,
    UPDATE_PAIR
} from '../constants/actionTypes';

const asyncDelay = 1;

export const loadAsync = () => {
    return dispatch => {
        GET()
            .then(result => {
                dispatch(load(result));
            })
            .catch(error => {
                console.warn('failed to make API GET call', error);
            });
    };
};

export const load = data => {
    return {
        type: LOAD_PAIRS,
        data
    };
};

export const removeAsync = index => {
    return dispatch => {
        setTimeout(() => {
            dispatch(remove(index));
        }, asyncDelay);
    };
};

export const remove = index => {
    return {
        type: REMOVE_PAIR,
        index
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

export const updateAsync = (index, value, matches) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(upate(index, value, matches));
        }, asyncDelay);
    };
};

export const upate = (index, value, matches) => {
    return {
        type: UPDATE_PAIR,
        index,
        value,
        matches
    };
};

export const persistAsync = pairs => {
    return dispatch => {
        PUT(pairs.toJS())
            .then(() => {
                dispatch(loadAsync());
            })
            .catch(error => {
                console.warn('failed to make API persist call', error);
            });
    };
};