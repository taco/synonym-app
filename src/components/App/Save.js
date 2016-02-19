import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { save } from '../../actions/form';
import { connect } from 'react-redux';
import { FORM_REDUCER } from '../../constants';

import { Button } from '../Button';

/**
 * Create saveCmp (form,store)
 * Proptypes (form,store)
 * handleClick
 *     dispatch event
 * map for to state
 * connect
 */
