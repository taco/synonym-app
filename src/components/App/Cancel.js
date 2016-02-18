import React, { PropTypes } from 'react';
import { cancel } from '../../actions/form';

import { Button } from '../Button';

const Cancel = ({ store }) => {

    const text = 'Cancel';
    const classType = 'link';
    const onClick = handleClick.bind(null, store);

    return (
        <Button { ...{ text, classType, onClick } } />
        );
};

Cancel.propTypes = {
    store: PropTypes.object.isRequired
};

export const handleClick = (store,event) => {
    event.preventDefault();

    store.dispatch(
        cancel()
    );
};

export default Cancel;