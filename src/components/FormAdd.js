import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExchangeRatesAPI } from '../reducers/wallet';

class FormAdd extends React.Component {
  state = {
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: '',
    tag: '',
    currencys: [],
  };

  componentDidMount() {
    this.fetchCurrencysAPI();
  }

  fetchCurrencysAPI = () => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        const keys = Object.keys(data);
        const currencys = keys.filter((key) => key !== 'USDT');
        return this.setState({
          currencys,
        });
      });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { stateFormWallet } = this.props;
    // passando o state menos a chave currencys
    const { currencys, ...resto } = this.state;
    stateFormWallet(resto);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    }));
  };

  render() {
    const { value, description, currency, method, tag, currencys } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="value">
            Valor
            <input
              id="value"
              data-testid="value-input"
              type="number"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              data-testid="description-input"
              type="text"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select
              id="moeda"
              name="currency"
              data-testid="currency-input"
              onChange={ this.handleChange }
              value={ currency }
            >
              {currencys.map((option) => (
                <option key={ option } value={ option } data-testid={ option }>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select
              id="method"
              name="method"
              data-testid="method-input"
              onChange={ this.handleChange }
              value={ method }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select
              id="tag"
              name="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
              value={ tag }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>
            Adicionar despesa
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  stateFormWallet: (state) => {
    dispatch(fetchExchangeRatesAPI(state));
  },
});

FormAdd.propTypes = {
  stateFormWallet: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(FormAdd);
