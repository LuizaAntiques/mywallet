import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionDeleteExpense, actionEditExpense } from '../actions';
import { Button } from './index';
import pencil from '../images/pencil.png';
import trash from '../images/bin.png';


class Table extends Component {
  constructor(props) {
    super(props);

    this.createTable = this.createTable.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.editButton = this.editButton.bind(this);
  }

  deleteButton(id) {
    const { expenses, deleteExpense } = this.props;
    const expensesUpdate = expenses.filter((item) => (item.id !== id));
    deleteExpense(expensesUpdate);
  }

  editButton(id) {
    const { editExpense } = this.props;
    editExpense(id);
  }

  createTable() {
    const { expenses } = this.props;
    return expenses.map((item) => {
      const currencyInfo = item.exchangeRates[item.currency];
      return (
        <tr key={ item.id }>
          <td>{item.value}</td>
          <td>{currencyInfo.name.split('/')[0]}</td>
          <td>{(parseFloat(item.value) * parseFloat(currencyInfo.ask)).toFixed(2)}</td>
          <td>Real</td>
          <td>{parseFloat(currencyInfo.ask).toFixed(2)}</td>
          <td>{item.tag}</td>
          <td>{item.method}</td>
          <td>{item.description}</td>
          <td className="td-btns">
            <Button
              name={ <img className ="icon" src={ pencil } /> }
              testid="edit-btn"
              onHandleClick={ () => this.editButton(item.id) }
              className="btn-edit"
            />
            <Button
              name={ <img className ="icon" src={ trash } /> }
              testid="delete-btn"
              onHandleClick={ () => this.deleteButton(item.id) }
              className="btn-del"
            />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table cellSpacing="0">
        <thead>
          <tr className="table-header">
            <th className="value-tbl">Valor</th>
            <th className="coin-tbl">Moeda</th>
            <th className="newvalue-tbl">Valor convertido</th>
            <th className="blr">Moeda de conversão</th>
            <th className="cambio">Câmbio utilizado</th>
            <th className="tag-tbl">Tag</th>
            <th className="method-tbl">Método de pagamento</th>
            <th className="description-tbl">Descrição</th>
            <th className="btns-tbl">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {this.createTable()}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  deleteExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

Table.defaultProps = {
  expenses: [],
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (payload) => dispatch(actionDeleteExpense(payload)),
  editExpense: (payload) => dispatch(actionEditExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
