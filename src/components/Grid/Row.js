import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Delete from './Delete';
import Edit from './Edit';

const Row = ({ store, value, matches }) => {

    const matchOutput = matches.join(', ');

    return (
        <tr>
            <td>
                { value }
            </td>
            <td>
                { matchOutput }
            </td>
            <td>
                <Edit { ...{ store, value } }/>
                <Delete { ...{ store, value } }/>
            </td>
        </tr>
        );
};

Row.propTypes = {
    matches: ImmutablePropTypes.listOf(
        PropTypes.string.isRequired
    ).isRequired,
    store: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired
};

export default Row;