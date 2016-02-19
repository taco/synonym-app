import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { updateKey } from '../../actions/form';
import { connect } from 'react-redux';
import { FORM_REDUCER } from '../../constants';

const KeyField = ({ defaultValue, store }) => {

    const inputProps = {
        className: 'form-control',
        defaultValue,
        onChange: handleChange.bind(null, store),
        type: 'text'
    };

    return (
        <div className="form-group">
            <label>
                { 'Key' }
            </label>
            <input { ...inputProps } />
        </div>
        );
};

KeyField.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired
};

export const handleChange = (store, event) => {
    store.dispatch(
        updateKey(event.target.value)
    );
};

export const mapStateToProps = state => {
    return {
        defaultValue: state[FORM_REDUCER].get('key')
    };
};

export default connect(mapStateToProps)(KeyField);