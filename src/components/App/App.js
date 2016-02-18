import React, { PropTypes } from 'react';
import { Grid } from '../Grid';

const App = ({ store }) => {
    return (
        <Grid { ...{ store } } />
        );
}

App.PropTypes = {
    store: PropTypes.object.isRequired
};

export default App;