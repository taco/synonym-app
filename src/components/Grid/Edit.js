import React, { PropTypes } from 'react';

const Edit = ({ value }) => {

    const text = 'Edit';
    const onClick = handleClick.bind(null, value);

    return (
        <button { ...{ onClick } }>
            { text }
        </button>
        );
};

Edit.propTypes = {
    value: PropTypes.string.isRequired
};

export const handleClick = (value, event) => {
    event.preventDefault();

    console.log(`Edit ${value}`);
};

export default Edit;