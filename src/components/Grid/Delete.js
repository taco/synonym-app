import React, { PropTypes } from 'react';

const Delete = ({ value }) => {

    const text = 'Remove';
    const type = 'button';
    const className = 'btn btn-link';
    const onClick = handleClick.bind(null, value);

    return (
        <button { ...{ type, className, onClick } }>
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