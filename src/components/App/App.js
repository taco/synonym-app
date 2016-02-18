import React, { PropTypes } from 'react';
import { Grid } from '../Grid';

import Header from './Header';
import Create from './Create';

const App = ({ store }) => {


    return (
        <div className="container">
            <Header />
            <div className="table-responsive" >
                <Grid { ...{ store } } />
            </div>
            <div>
                <Create />
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

App.PropTypes = {
    store: PropTypes.object.isRequired
};

export default App;