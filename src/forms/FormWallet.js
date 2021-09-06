import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Inputs, Select, Button } from '../components';
import { requestExchange, requestCurrencies } from '../actions';

class FormWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { setExpenses } = this.props;
    const { id } = this.state;
    setExpenses(this.state);
    this.setState({ id: id + 1 });
  }

  render() {
    const methodOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies } = this.props;

    return (
      <form className="form-add">
        <Inputs
          name="value"
          page="wallet"
          type="number"
          label="Valor"
          onHandleChange={ this.handleChange }
          className="input-value"
        />
        <Select
          name="currency"
          page="wallet"
          label="Moeda"
          onHandleChange={ this.handleChange }
          options={ currencies }
          className="select-psize"
        />
        <Select
          name="method"
          page="wallet"
          label="Método de pagamento"
          onHandleChange={ this.handleChange }
          options={ methodOptions }
          className="select-msize"
        />
        <Select
          name="tag"
          page="wallet"
          label="Tag"
          onHandleChange={ this.handleChange }
          options={ tagOptions }
          className="select-msize"
        />
        <Inputs
          name="description"
          page="wallet"
          type="text"
          label="Descrição"
          onHandleChange={ this.handleChange }
          className="description"
        />
        <Button
          name="Add despesa"
          onHandleClick={ this.handleClick }
          className="btn-add-expense"
        />
      </form>
    );
  }
}

FormWallet.propTypes = {
  setCurrencies: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(requestCurrencies()),
  setExpenses: (payload) => dispatch(requestExchange(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
