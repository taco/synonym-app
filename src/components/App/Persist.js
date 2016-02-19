import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { persistAsync } from '../../actions/pairs';
import { PAIRS_REDUCER } from '../../constants';

import { Button } from '../Button';

const Persist = ({ store, pairs }) => {

    const text = 'Persist';
    const classType = 'success';
    const onClick = handleClick.bind(null, { store, pairs });

    return (
        <Button { ...{ text, classType, onClick } } />
        );
};

Persist.propTypes = {
    pairs: ImmutablePropTypes.list,
    store: PropTypes.object.isRequired
};

export const handleClick = ({ store, pairs }, event) => {
    event.preventDefault();

    store.dispatch(
        persistAsync(pairs)
    );
};

export const mapStateToProps = state => {
    return {
        pairs: state[PAIRS_REDUCER]
    };
};

export default connect(mapStateToProps)(Persist);