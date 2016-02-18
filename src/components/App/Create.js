import React, { PropTypes } from 'react';

import { Button } from '../Button';

const Create = () => {

    const text = 'Create';
    const classType = 'primary';
    const onClick = handleClick;

    return (
        <Button { ...{ text, classType, onClick } } />
        );
};

export const handleClick = (event) => {
    event.preventDefault();

    console.log(`Create`);
};

export default Create;