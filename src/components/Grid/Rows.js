import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Row from './Row';

export const Rows = ({ store, pairs }) => {
    const rows = pairs.map((matches, value) => {
        const key = `row-${value}`;
        return (
            <Row { ...{ store, matches, value, key } } />
            );
    }).toSeq();

    return (
        <tbody>
            { rows }
        </tbody>
        );
};

Rows.propTypes = {
    pairs: ImmutablePropTypes.mapOf(
        ImmutablePropTypes.listOf(
            PropTypes.string.isRequired
        ).isRequired
    ).isRequired,
    store: PropTypes.object.isRequired
};

export default Rows;