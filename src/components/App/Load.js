import React, { PropTypes } from 'react';
import { loadAsync } from '../../actions/pairs';

import { Button } from '../Button';


const Load = ({ store }) => {

    const text = 'Refresh';
    const classType = 'link';
    const onClick = handleClick.bind(null, store);

    return (
        <Button { ...{ text, classType, onClick } } />
        );
};

export const handleClick = (store, event) => {
    event.preventDefault();

    store.dispatch(
        loadAsync()
    );
};

export default Load;