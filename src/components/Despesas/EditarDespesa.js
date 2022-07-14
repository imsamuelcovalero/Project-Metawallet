import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpenses } from '../../actions';

class EditarDespesa extends Component {
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
    const { editExpense, allExpenses, expenseToEdit } = this.props;
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
    this.setState({
      // id: '',
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  render() {
    const { currencie } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <form>
        <label htmlFor="input-expense-valor">
          Adicione o Valor da Despesa:
          <input
            data-testid="value-input"
            id="input-expense-valor"
            name="value"
            value={ value }
            type="number"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-expense-description">
          Descrição da Despesa:
          <input
            data-testid="description-input"
            id="input-expense-description"
            name="description"
            value={ description }
            type="text"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="coins-select">
          Moeda:
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
        <label htmlFor="select-pay-method">
          Método de pagamento:
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
          </select>
        </label>
        <label htmlFor="select-expense-category">
          Tipo de Despesa:
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
          </select>
        </label>
        <button
          type="submit"
          onClick={ this.handleSubmit }
        >
          Editar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (globalState) => ({
  currencie: globalState.wallet.currencies,
  allExpenses: globalState.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (expense) => dispatch(editExpenses(expense)),
});

EditarDespesa.propTypes = {
  expenseToEdit: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
  currencie: PropTypes.oneOfType([PropTypes.array]).isRequired,
  // ask: PropTypes.number.isRequired,
  // id: PropTypes.number.isRequired,
  editExpense: PropTypes.func.isRequired,
  allExpenses: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditarDespesa);
