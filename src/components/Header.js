import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import walletLogo from '../images/wallet.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.updateTotal = this.updateTotal.bind(this);
  }

  componentDidMount() {
    const h2 = document.querySelector('.title-wallet');
    h2.classList.add('view-title');
  }

  updateTotal() {
    const { expenses } = this.props;
    let total = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      total += (parseFloat(value) * parseFloat(exchangeRates[currency].ask));
    });

    return total.toFixed(2);
  }

  render() {
    const { userEmail } = this.props;

    return (
      <header>
        <div className="wallet-logo">
          <div className="box-logo-wallet">
            <img src={ walletLogo } alt="imagem carteira" className="logo-wallet"/>
          </div>
          <h2 className="title-wallet">MyWALLET</h2>
        </div>
        <div className="info-user">
          <span
            data-testid="email-field"
            className="user-email"
          >
            {userEmail}
          </span>
          <div className="total-wallet">
            <span className="total-brl">Total gasto:</span>
            <div>
              <span data-testid="total-field">{this.updateTotal()}</span>
              <span data-testid="header-currency-field">BRL</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  expenses: [],
};

const mapStateToProps = ({ user, wallet }) => ({
  userEmail: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
