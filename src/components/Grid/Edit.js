import React, { PropTypes } from 'react';

import { Button } from '../Button';

const Edit = ({ value }) => {

    const text = 'Edit';
    const classType = 'default';
    const onClick = handleClick.bind(null, value);

    return (
        <Button { ...{ text, classType, onClick } } />
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