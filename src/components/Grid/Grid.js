import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { PAIRS_REDUCER } from '../../constants';

import Header from './Header';
import Rows from './Rows';

const Grid = ({ store, pairs }) => {

    const valueTitle = 'Key';
    const matchTitle = 'Synonyms';
    const className = 'table table-striped table-bordered table-hover';

    return (
        <table { ...{ className } } >
            <Header { ...{ valueTitle, matchTitle } } />
            <Rows { ...{ store, pairs } } />
        </table>
        );
};

Grid.propTypes = {
    pairs: ImmutablePropTypes.mapOf(
        ImmutablePropTypes.listOf(
            PropTypes.string.isRequired
        ).isRequired
    ).isRequired,
    store: PropTypes.object.isRequired
};

export const mapStateToProps = state => {
    return {
        pairs: state[PAIRS_REDUCER]
    };
};

export default connect(mapStateToProps)(Grid);

