import React, { PropTypes } from 'react';
import { removeAsync } from '../../actions/pairs';

import { Button } from '../Button';

const Delete = ({ store, index, value }) => {

    const text = 'Remove';
    const classType = 'link';
    const onClick = handleClick.bind(null, { store, index, value });

    return (
        <Button { ...{ text, classType, onClick } } />
        );
};

Delete.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
};

export const handleClick = ({ store, index, value }, event) => {
    event.preventDefault();

    store.dispatch(
        removeAsync(index, value)
    );
};

export default Delete;