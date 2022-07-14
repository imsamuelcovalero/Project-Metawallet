import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import { getCurrenciesThunk, excludeExpenses,
  activeEdit } from '../../actions';
import EditarDespesa from '../../components/Despesas/EditarDespesa';
import CriarDespesa from '../../components/Despesas/CriarDespesa';
import EditarDespesaTabela from '../../components/Despesas/EditarDespesaTabela';
import { DivDespesas, DivGlobal, Table, HeaderS } from './Style';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expenseToEdit: [],
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  deleteSubmit = (expense) => {
    const { allExpenses, excludeExpense } = this.props;
    const newExpenses = allExpenses
      .filter((actualExpense) => actualExpense.id !== expense.id);
    excludeExpense(newExpenses);
  }

  handleEdit = (expense) => {
    const { edit } = this.props;
    this.setState({
      expenseToEdit: expense,
    });
    edit(true);
  }

  render() {
    const { allExpenses, editActive } = this.props;
    const { expenseToEdit } = this.state;
    return (
      <DivGlobal>
        <HeaderS>
          <Header />
        </HeaderS>
        <DivDespesas>
          {
            editActive
              ? <EditarDespesa expenseToEdit={ expenseToEdit } />
              : <CriarDespesa />
          }
        </DivDespesas>
        <Table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              allExpenses.map((expense) => (
                (editActive && expense.id === expenseToEdit.id)
                  ? (
                    <EditarDespesaTabela
                      expenseToEdit={ expenseToEdit }
                      key={ expense.id }
                      expense={ expense }
                    />
                  )
                  : (
                    <tr key={ expense.id }>
                      <td>{ expense.description }</td>
                      <td>{ expense.tag }</td>
                      <td>{ expense.method }</td>
                      <td>{ parseFloat(expense.value).toFixed(2) }</td>
                      {/* resolução com replace
                   <td>
                    { expense.exchangeRates[expense.currency]
                      .name.replace('/Real Brasileiro', '') }
                  </td> */}
                      <td>
                        { expense.exchangeRates[expense.currency]
                          .name.split('/')[0] }
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
                          type="button"
                          data-testid="edit-btn"
                          onClick={ () => this.handleEdit(expense) }
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          data-testid="delete-btn"
                          onClick={ () => this.deleteSubmit(expense) }
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  )
              ))
            }
          </tbody>
        </Table>
      </DivGlobal>
    );
  }
}

const mapStateToProps = (globalState) => ({
  currencie: globalState.wallet.currencies,
  allExpenses: globalState.wallet.expenses,
  editActive: globalState.wallet.isEditActive,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  excludeExpense: (expense) => dispatch(excludeExpenses(expense)),
  edit: (boolean) => dispatch(activeEdit(boolean)),
});

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  allExpenses: PropTypes.oneOfType([PropTypes.array]).isRequired,
  excludeExpense: PropTypes.func.isRequired,
  editActive: PropTypes.bool.isRequired,
  edit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
