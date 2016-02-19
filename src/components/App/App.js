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

const App = ({ view, store }) => {

    let content;
    let buttons;

    switch (view.get('page')) {
    case 'create':
        content = (
            <div>
                <Form store={ store } />
            </div>
        );

        buttons = (
            <div>
                <Save store={ store } />
                    { ' ' }
                <Cancel store={ store } />
            </div>
        );
        break;

    case 'grid':
    default:
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
    }

    return (
        <div className="container">
            <Header store={ store } />
            { content }
            { buttons }
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
    store: PropTypes.object.isRequired,
    view: ImmutablePropTypes.map.isRequired
};

export const mapStateToProps = state => {
    return {
        view: state[VIEW_REDUCER]
    };
};

export default connect(mapStateToProps)(App);