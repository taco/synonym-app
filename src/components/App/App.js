import React, { PropTypes } from 'react';
import { Grid } from '../Grid';

import Header from './Header';

const App = ({ store }) => {


    return (
        <div className="container">
            <Header />
            <div className="table-responsive" >
                <Grid { ...{ store } } />
            </div>
        </div>
        );
}

App.PropTypes = {
    store: PropTypes.object.isRequired
};

export default App;