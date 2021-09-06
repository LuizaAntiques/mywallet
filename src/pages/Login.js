import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionRegisterUser } from '../actions';
import { Inputs, Button } from '../components';
import walletLogo from '../images/wallet.png';
import '../CSS/Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validation = this.validation.bind(this);
    this.setNewClasses = this.setNewClasses.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.validation());
  }

  validation() {
    const regex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const number = 5;
    const { email, password } = this.state;
    const disabled = !(regex.test(email) && password.length > number);

    this.setState({ disabled });
  }

  handleClick() {
    const { history, registerUser } = this.props;
    const { email } = this.state;
    registerUser(email);
    this.setNewClasses();
    setTimeout(() => {history.push('/carteira')}, 2000);
  }

  setNewClasses() {
    const circle = document.querySelector('.boxlogo-login');
    circle.classList.add('transitionLogin');
    const img = document.querySelector('.logo-login');
    img.classList.add('transitionLoginImg');
    const form = document.querySelector('.form-login');
    form.classList.add('fadeLogin');
    const h2 = document.querySelector('.title-login');
    h2.classList.add('fadeLogin');
  }

  render() {
    const { disabled } = this.state;
    return (
      <div className="login-page">
        <div className="container-login">
          <div className="boxlogo-login">
            <img src={ walletLogo } alt="imagem carteira" className="logo-login"/>
          </div>
          <h2 className="title-login">MyWALLET</h2>
        </div>
        <form className="form-login">
          <fieldset>
            <Inputs
              name="email"
              page="login"
              type="text"
              holder="E-mail"
              onHandleChange={ this.handleChange }
              className="input-login"
            />
            <Inputs
              name="password"
              page="login"
              type="password"
              holder="Senha"
              onHandleChange={ this.handleChange }
              className="input-login"
            />
            <Button
              name="Entrar"
              onHandleClick={ this.handleClick }
              disabled={ disabled }
              className="btn-login"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => ({
  registerUser: (payload) => dispatch(actionRegisterUser(payload)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  registerUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispathToProps)(Login);
