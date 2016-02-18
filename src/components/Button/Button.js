import React, { PropTypes } from 'react';

const Button = ({ text, classType, onClick }) => {

    const type = 'button';
    const className = `btn btn-${classType}`;

    return (
        <button { ...{ type, className, onClick } }>
            { text }
        </button>
        );
};

Button.propTypes = {
    classType: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
};

export default Button;