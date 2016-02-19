import {
    LOAD_PAIRS,
    REMOVE_PAIR,
    ADD_PAIR,
    UPDATE_PAIR
} from '../constants/actionTypes';

const defaultData = [{
    key: 'sweather',
    synonyms: ['cold', 'jacket']
}, {
    key: 'boots',
    synonyms: ['tough', 'feet']
}, {
    key: 'words',
    synonyms: ['some more', 'phrases', 'are here']
}];

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