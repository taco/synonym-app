import React, { PropTypes } from 'react';

import { Button } from '../Button';

const Delete = ({ value }) => {

    const text = 'Remove';
    const classType = 'link';
    const onClick = handleClick.bind(null, value);

    return (
        <Button { ...{ text, classType, onClick } } />
        );
};

Delete.propTypes = {
    value: PropTypes.string.isRequired
};

export const handleClick = (value, event) => {
    event.preventDefault();

    console.log(`Remove ${value}`);
};

export default Delete;