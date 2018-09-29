import React, { Component } from 'react';
import PropTypes from 'prop-types';
import form from '../hocs/form';

class Form extends Component {

  render() {
    const { getValues, validate, validateAll, showError, hideError, ...props } = this.props;

    return (
      <form {...props} />
    )
  }
}

Form.propTypes = {
    getValues: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
    validateAll: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
    hideError: PropTypes.func.isRequired,
};

export default form(Form);
