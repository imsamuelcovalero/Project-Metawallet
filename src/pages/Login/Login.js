import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserEmail } from '../../actions';
import { Div, Btn, DivGlobal } from './Style';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: [],
      isSaveButtonDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, () => {
      const { senha, email } = this.state;

      const MINLETTERS = 6;
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Caso o valor do input seja maior ou igual a 6 abilita o botão, caso contrário permanece sesabilitado
      const errorCases = [
        senha.length < MINLETTERS,
        pattern.test(email) === false,
      ];
      // caso alguma verificação for verdadeira, desabilita o botão de salvar, caso contrário habilita
      const isDisabled = errorCases.some((err) => err === true);
      this.setState({
        isSaveButtonDisabled: isDisabled,
      });
    });
  }

  handleSubmit = (event) => {
    const { history, userEmail } = this.props;
    const { email } = this.state;
    event.preventDefault();
    userEmail(email);
    history.push('/carteira');
  }

  render() {
    const { isSaveButtonDisabled, email, senha } = this.state;
    return (
      <DivGlobal>
        <Div>
          <h1>Login</h1>
          <form>
            <input
              data-testid="email-input"
              name="email"
              value={ email }
              type="email"
              placeholder="Email"
              onChange={ this.handleChange }
            />
            <input
              data-testid="password-input"
              name="senha"
              value={ senha }
              type="password"
              placeholder="Senha"
              onChange={ this.handleChange }
            />
            <Btn
              type="submit"
              disabled={ isSaveButtonDisabled }
              onClick={ this.handleSubmit }
            >
              Entrar
            </Btn>
          </form>
        </Div>
      </DivGlobal>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(setUserEmail(email)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  userEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
