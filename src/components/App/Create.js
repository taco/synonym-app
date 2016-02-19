import React, { PropTypes } from 'react';
import { create } from '../../actions/form';

import { Button } from '../Button';

const Create = ({ store }) => {

    const text = 'Create';
    const classType = 'success';
    const onClick = handleClick.bind(null, store);

    return (
        <Button { ...{ text, classType, onClick } } />
        );
};

Create.propTypes = {
    store: PropTypes.object.isRequired
};

export const handleClick = (store,event) => {
    event.preventDefault();

    store.dispatch(
        create()
    );
};

export default Create;