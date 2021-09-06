import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, onHandleClick, disabled, testid, className } = this.props;
    return (
      <button
        type="button"
        onClick={ onHandleClick }
        disabled={ disabled }
        data-testid={ testid }
        className={ className }
      >
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  onHandleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  testid: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  name: 'Enviar',
  disabled: false,
  testid: '',
  className: '',
};

export default Button;
