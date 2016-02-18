import React, { PropTypes } from 'react';
import { removeAsync } from '../../actions/pairs';

import { Button } from '../Button';

const Delete = ({ store, value }) => {

    const text = 'Remove';
    const classType = 'link';
    const onClick = handleClick.bind(null, { store, value });

    return (
        <Button { ...{ text, classType, onClick } } />
        );
};

Delete.propTypes = {
    value: PropTypes.string.isRequired
};

export const handleClick = ({ store, value }, event) => {
    event.preventDefault();

    store.dispatch(
        removeAsync(value)
    );
};

export default Delete;