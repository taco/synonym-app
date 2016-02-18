import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Delete from './Delete';
import Edit from './Edit';

const Row = ({ store, value, matches }) => {

    const style = { margin: '5px' };

    const matchOutput = matches.map(
        (text, i) => <kbd style={ style } key={ i }>{ text }</kbd>
    );

    return (
        <tr>
            <td>
                <code>
                    { value }
                </code>
            </td>
            <td>
                { matchOutput }
            </td>
            <td>
                <Edit { ...{ store, value, matches } }/>
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