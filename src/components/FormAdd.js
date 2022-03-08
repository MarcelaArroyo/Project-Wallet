import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExchangeRatesAPI } from '../reducers/wallet';

class FormAdd extends React.Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { stateFormWallet } = this.props;
    stateFormWallet({ ...this.state });
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  render() {
    const { value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    return (
      <section>
        <form>
          <label htmlFor={ value }>
            Valor:
            <input
              data-testid="value-input"
              type="number"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor={ description }>
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor={ currency }>
            Moeda:
            <select
              name="currency"
              data-testid="currency-input"
              onChange={ this.handleChange }
            >
              <option value="USD">USD</option>
            </select>
          </label>
          <label htmlFor={ method }>
            Método de pagamento:
            <select
              name="method"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor={ tag }>
            Tag:
            <select
              name="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  stateFormWallet: (state) => { dispatch(fetchExchangeRatesAPI(state)); },
});

FormAdd.propTypes = {
  stateFormWallet: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(FormAdd);
