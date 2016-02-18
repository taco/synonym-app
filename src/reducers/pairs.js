import { fromJS } from 'immutable';

const initialState = fromJS({
    sweater: ['cold', 'jacket'],
    boots: ['tough', 'feet']
});

export default (state = initialState, action) => {
    switch (action.type) {
    default:
        return state;
    }
};