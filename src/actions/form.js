import {
    START_EDIT,
    START_CREATE,
    UPDATE_KEY,
    UPDATE_VALUES,
    CANCEL
} from '../constants/actionTypes';

import { add, update } from './pairs';

export const cancel = () => {
    return {
        type: CANCEL
    };
};

export const edit = (index, value, matches) => {
    // TODO
};

export const create = () => {
    // TODO
};

export const updateKey = value => {
    // TODO
};

export const updateValues = value => {
    // TODO
};

export const save = state => {
    // TODO
};