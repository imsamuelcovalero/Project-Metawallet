import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Cria uma classe para mostrar a Header da página
class Header extends Component {
  render() {
    const { userEmail, expense } = this.props;
    const TRES = 3;

    // Cria uma constate para receber o retorno do reduce
    const valorTotal = expense.reduce((acc, curr) => {
      // Desestrutura a chave value de dentro do objeto atual
      const { value } = curr;
      // Cria uma constante para receber o nome da moeda atual
      // faz um Object.values para transformar o objeto exchangeRates em uma array
      // em cima da array faz um find para relacionar com a moda da despesa do curr
      // por fim retorna a linha da moeda desejada no exchangeRates
      const currency = Object.values(curr.exchangeRates)
        .find((item) => item.code === curr.currency);
      // Cria uma constante que recebe o resultado da cotação da moeda vezes o valor da despesa
      const totalValue = currency.ask * value;
      // Retorna o acumulador somado ao totalValue, que é a "Despesas Totais" no aplicativo
      // inicia o acc em 0
      return acc + totalValue;
    }, 0);
    return (
      <header>
        <h4 data-testid="email-field">
          { userEmail }
        </h4>
        <span>Despesas Totais:</span>
        <h4 data-testid="total-field">
          { valorTotal.toFixed(TRES) }
        </h4>
        <h4 data-testid="header-currency-field">
          BRL
        </h4>
      </header>
    );
  }
}

const mapStateToProps = (globalState) => ({
  userEmail: globalState.user.email,
  expense: globalState.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expense: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
