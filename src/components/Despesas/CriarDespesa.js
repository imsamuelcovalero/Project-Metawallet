import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpenseThunk } from '../../actions';

const alimentacao = 'Alimentação';

class CriarDespesa extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    };
  }

  componentDidMount = () => {
    const { allExpenses } = this.props;
    this.setState({
      id: allExpenses.length || 0,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { addExpense } = this.props;
    const { id } = this.state;
    addExpense(this.state);
    this.setState({
      id: id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
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
            <option>{alimentacao}</option>
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
          Adicionar despesa
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
  addExpense: (expense) => dispatch(addExpenseThunk(expense)),
});

CriarDespesa.propTypes = {
  allExpenses: PropTypes.oneOfType([PropTypes.array]).isRequired,
  currencie: PropTypes.oneOfType([PropTypes.array]).isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CriarDespesa);
