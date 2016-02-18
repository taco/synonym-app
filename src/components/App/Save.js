import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { save } from '../../actions/form';
import { connect } from 'react-redux';
import { FORM_REDUCER } from '../../constants';

import { Button } from '../Button';

const Save = ({ form, store }) => {

    const text = 'Save';
    const classType = 'primary';
    const onClick = handleClick.bind(null, { form, store });

    return (
        <Button { ...{ text, classType, onClick } } />
        );
};

Save.propTypes = {
    form: ImmutablePropTypes.map.isRequired,
    store: PropTypes.object.isRequired
};

export const handleClick = ({ form, store }, event) => {
    event.preventDefault();

    store.dispatch(
        save(form)
    );
};

export const mapStateToProps = state => {
    return {
        form: state[FORM_REDUCER]
    };
};

export default connect(mapStateToProps)(Save);