import {
    SWITCH_VIEW
} from '../constants/actionTypes';

export const switchView = page => {
    return {
        type: SWITCH_VIEW,
        page
    };
};