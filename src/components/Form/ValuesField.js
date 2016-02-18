import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { updateValues } from '../../actions/form';
import { connect } from 'react-redux';
import { FORM_REDUCER } from '../../constants';

const ValuesField = ({ defaultValue, store }) => {

    const onChange = handleChange.bind(null, store);

    return (
        <div className="form-group">
            <label>
                { 'Values' }
            </label>
            <textarea
                { ...{ className: 'form-control', defaultValue, onChange } }
            />
        </div>
        );
};

ValuesField.propTypes = {
    form: ImmutablePropTypes.map.isRequired,
    store: PropTypes.object.isRequired
};

export const handleChange = (store, event) => {
    store.dispatch(
        updateValues(event.target.value)
    );
};

export const mapStateToProps = state => {
    return {
        defaultValue: state[FORM_REDUCER].get('values')
    };
};

export default connect(mapStateToProps)(ValuesField);