import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { activeEdit, editExpenses } from '../../actions';
import { TrS } from './Style';

class EditarDespesaTabela extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { expenseToEdit } = this.props;
    this.setState({
      value: expenseToEdit.value,
      description: expenseToEdit.description,
      currency: expenseToEdit.currency,
      method: expenseToEdit.method,
      tag: expenseToEdit.tag,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { editExpense, allExpenses, expenseToEdit, edit } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const editedExpenses = allExpenses.map((expense) => {
      if (expense.id === expenseToEdit.id) {
        const expenseEdited = {
          id: expense.id,
          value,
          description,
          currency,
          method,
          tag,
          exchangeRates: expense.exchangeRates,
        };
        return expenseEdited;
      }
      return expense;
    });
    editExpense(editedExpenses);
    edit(false);
    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  render() {
    const { currencie, expense, oddOrEven } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <TrS oddOrEven={ oddOrEven }>
        <td>
          <label htmlFor="input-expense-description">
            <input
              data-testid="description-input"
              id="input-expense-description"
              name="description"
              value={ description }
              type="text"
              onChange={ this.handleChange }
            />
          </label>
        </td>
        <td>
          <label htmlFor="select-expense-category">
            <select
              data-testid="tag-input"
              id="select-expense-category"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
              <option>Outros</option>
            </select>
          </label>
        </td>
        <td>
          <label htmlFor="select-pay-method">
            <select
              data-testid="method-input"
              id="select-pay-method"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
              <option>Pix</option>
            </select>
          </label>
        </td>
        <td>
          <label htmlFor="input-expense-valor">
            <input
              data-testid="value-input"
              id="input-expense-valor"
              name="value"
              value={ value }
              type="number"
              onChange={ this.handleChange }
            />
          </label>
        </td>
        <td>
          <label htmlFor="coins-select">
            <select
              data-testid="currency-input"
              id="coins-select"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {
                currencie.map((elemento) => (
                  <option key={ elemento }>{ elemento }</option>
                ))
              }
            </select>
          </label>
        </td>
        <td>
          { parseFloat(expense.exchangeRates[expense.currency].ask)
            .toFixed(2) }
        </td>
        <td>
          { (parseFloat(expense
            .exchangeRates[expense.currency]
            .ask) * expense.value).toFixed(2)}
        </td>
        <td>Real</td>
        <td>
          <button
            type="submit"
            onClick={ this.handleSubmit }
          >
            Editar despesa
          </button>
        </td>
      </TrS>
    );
  }
}

const mapStateToProps = (globalState) => ({
  currencie: globalState.wallet.currencies,
  allExpenses: globalState.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (expense) => dispatch(editExpenses(expense)),
  edit: (boolean) => dispatch(activeEdit(boolean)),
});

EditarDespesaTabela.propTypes = {
  expenseToEdit: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
  currencie: PropTypes.oneOfType([PropTypes.array]).isRequired,
  editExpense: PropTypes.func.isRequired,
  allExpenses: PropTypes.oneOfType([PropTypes.array]).isRequired,
  expense: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.shape({
      USD: PropTypes.shape({
        ask: PropTypes.string,
      }),
      EUR: PropTypes.shape({
        ask: PropTypes.string,
      }),
      BRL: PropTypes.shape({
        ask: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
  edit: PropTypes.func.isRequired,
  oddOrEven: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditarDespesaTabela);
