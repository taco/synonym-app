import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Delete from './Delete';
import Edit from './Edit';

const Row = ({ store, pair, index }) => {

    const matches = pair.get('synonyms');
    const value = pair.get('key');
    const unsaved = pair.get('unsaved');

    const style = { margin: '5px' };

    const matchOutput = matches.map(
        (text, i) => <kbd style={ style } key={ i }>{ text }</kbd>
    );

    const className = unsaved ? 'warning' : '';

    return (
        <tr className={ className }>
            <td>
                <code>
                    { value }
                </code>
            </td>
            <td>
                { matchOutput }
            </td>
            <td>
                <Edit { ...{ store, index, value, matches } }/>
                <Delete { ...{ store, index, value } }/>
            </td>
        </tr>
        );
};

Row.propTypes = {
    index: PropTypes.number.isRequired,
    pair: ImmutablePropTypes.map.isRequired,
    store: PropTypes.object.isRequired,
    value: PropTypes.string
};

export default Row;