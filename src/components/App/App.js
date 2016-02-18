import React, { PropTypes } from 'react';
import { Grid } from '../Grid';

import Header from './Header';
import Create from './Create';
import Load from './Load';

import { store } from '../../store';
import { loadAsync } from '../../actions/pairs';

store.dispatch(
    loadAsync()
);

const App = ({ store }) => {

    return (
        <div className="container">
            <Header />
            <div className="table-responsive" >
                <Grid { ...{ store } } />
            </div>
            <div>
                <Create />
                { ' ' }
                <Load store={ store } />
            </div>
            <p className="text-right">
                { 'Source: ' }
                <a href="https://github.com/taco/synonym-app">
                    { 'https://github.com/taco/synonym-app' }
                </a>
            </p>
        </div>
        );
}

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;