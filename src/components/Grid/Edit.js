import React, { PropTypes } from 'react';

const Edit = ({ value }) => {

    const text = 'Edit';
    const type = 'button';
    const className = 'btn btn-default';
    const onClick = handleClick.bind(null, value);

    return (
        <button { ...{ type, className, onClick } }>
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