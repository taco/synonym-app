import React from 'react';
import App from '../App/App';
import { Provider } from 'react-redux';
import store from '../../store/store';

export default (
    <Provider store={ store }>
        <App store={ store }/>
    </Provider>
);