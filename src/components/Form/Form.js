import React, { PropTypes } from 'react';

import KeyField from './KeyField';
import ValuesField from './ValuesField';

const Form = ({ store }) => {
    return (
        <form>
            <KeyField store={ store } />
            <ValuesField store={ store } />
        </form>
        );
};

Form.propTypes = {
    store: PropTypes.object.isRequired
};

export default Form;