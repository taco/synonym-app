import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Row from './Row';

export const Rows = ({ store, pairs }) => {
    const rows = pairs.map((pair, index) => {
        const key = `row-${index}`;
        const value = pair.get('key');
        const matches = pair.get('synonyms');
        return (
            <Row { ...{ store, matches, value, index, key } } />
            );
    }).toSeq();

    return (
        <tbody>
            { rows }
        </tbody>
        );
};

Rows.propTypes = {
    pairs: ImmutablePropTypes.listOf(
        ImmutablePropTypes.map.isRequired
    ).isRequired,
    store: PropTypes.object.isRequired
};

export default Rows;