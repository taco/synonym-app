import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { Grid } from '../Grid';
import Header from './Header';
import Create from './Create';
import Load from './Load';
import Save from './Save';
import Cancel from './Cancel';
import { Form } from '../Form';

import { store } from '../../store';
import { loadAsync } from '../../actions/pairs';
import { VIEW_REDUCER } from '../../constants';

store.dispatch(
    loadAsync()
);

/**
 * Switch for view state
 * map view prop
 */

const App = ({ view, store }) => {

    let content;
    let buttons;

    content = (
        <div className="table-responsive" >
            <Grid { ...{ store } } />
        </div>
    );

    buttons = (
        <div>
            <Create store={ store } />
            { ' ' }
            <Load store={ store } />
        </div>
    );

    return (
        <div className="container">
            <Header store={ store } />
            { content }
            { buttons }
        </div>
        );
}

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App