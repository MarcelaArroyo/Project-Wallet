import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  state = {
    totalField: 0,
    currencyField: 'BRL',
  }

  componentDidUpdate(prevProps) {
    const { expensesWallet } = this.props;
    if (prevProps.expensesWallet !== expensesWallet) {
      return this.totalExpense();
    }
  }

  totalExpense = () => {
    let { totalField } = this.state;
    // array contendo os objetos com as informações
    const { expensesWallet } = this.props;
    // número da posição do último elemento do array
    const lastElement = expensesWallet.length - 1;
    // acessando os valores das chaves currency e value do último elemento
    // que foi adicionado ao clicar no botão "Adicionar despesas"
    const { currency, value } = expensesWallet[lastElement];
    // acessando o objeto da chave exchangeRates, onde esse objeto possui
    // sua chave igual ao currency
    const rate = expensesWallet[lastElement].exchangeRates[currency];
    // acessando o valor da chave ask do objeto
    const { ask } = rate;
    totalField += value * ask;
    this.setState({
      totalField,
    });
  }

  render() {
    const { userEmail } = this.props;
    const { totalField, currencyField } = this.state;
    return (
      <header>
        <h1>Trybe</h1>
        <p data-testid="email-field">{userEmail}</p>
        <p data-testid="total-field">
          Despesa Total: R$
          {totalField.toFixed(2)}
        </p>
        <p data-testid="header-currency-field">{currencyField}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expensesWallet: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
