import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { edit } from '../../actions/form';

import { Button } from '../Button';

const Edit = ({ store, value, matches }) => {

    const text = 'Edit';
    const classType = 'default';
    const onClick = handleClick.bind(null, { store, value, matches });

    return (
        <Button { ...{ text, classType, onClick } } />
        );
};

Edit.propTypes = {
    matches: ImmutablePropTypes.listOf(
        PropTypes.string.isRequired
    ).isRequired,
    store: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired
};

export const handleClick = ({ store, value, matches }, event) => {
    event.preventDefault();

    store.dispatch(
        edit(value, matches)
    );
};

export default Edit;