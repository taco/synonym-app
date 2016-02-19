import React, { PropTypes } from 'react';
import { updateValues } from '../../actions/form';
import { connect } from 'react-redux';
import { FORM_REDUCER } from '../../constants';

const ValuesField = ({ defaultValue, store }) => {

    const textAreaProps = {
        className: 'form-control',
        defaultValue,
        onChange: handleChange.bind(null, store),
        placeholder: 'phrase one, phrase two, more, words'
    };

    return (
        <div className="form-group">
            <label>
                { 'Synonyms' }
            </label>
            <textarea
                { ...textAreaProps }
            />
            <p className="help-block">
                { 'Comma delimited phrases to match to key.' }
            </p>
        </div>
        );
};

ValuesField.propTypes = {
    defaultValue: PropTypes.string.isRequired,
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