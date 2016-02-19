import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { edit } from '../../actions/form';

import { Button } from '../Button';

const Edit = ({ index, store, value, matches }) => {

    const text = 'Edit';
    const classType = 'link';
    const onClick = handleClick.bind(null, { store, index, value, matches });

    return (
        <Button { ...{ text, classType, onClick } } />
        );
};

Edit.propTypes = {
    index: PropTypes.number.isRequired,
    matches: ImmutablePropTypes.listOf(
        PropTypes.string.isRequired
    ).isRequired,
    store: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired
};

export const handleClick = ({ store, index, value, matches }, event) => {
    event.preventDefault();

    store.dispatch(
        edit(index, value, matches)
    );
};

export default Edit;