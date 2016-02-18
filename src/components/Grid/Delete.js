import React, { PropTypes } from 'react';

const Delete = ({ value }) => {

    const text = 'Remove';
    const onClick = handleClick.bind(null, value);

    return (
        <button { ...{ onClick } }>
            { text }
        </button>
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