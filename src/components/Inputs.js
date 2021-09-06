import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const {
      name,
      label,
      page,
      type,
      onHandleChange,
      value,
      className,
      holder } = this.props;
    return (
      <label htmlFor={ `${name}-${page}` }>
        { label }
        <input
          name={ name }
          id={ `${name}-${page}` }
          type={ type }
          data-testid={ `${name}-input` }
          onChange={ onHandleChange }
          value={ value }
          className={ className }
          placeholder={ holder }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  page: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onHandleChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  holder: PropTypes.string,
};

Inputs.defaultProps = {
  page: 'general',
  type: 'text',
  value: undefined,
  className: '',
  holder: '',
  label: '',
};

export default Inputs;
