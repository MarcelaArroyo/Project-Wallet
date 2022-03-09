import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { stateWallet } = this.props;
    console.log(stateWallet);
    return (
      <table>
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
          { stateWallet.map(
            ({ id, description, tag, method, value, exchangeRates, currency }) => {
              const ask = +exchangeRates[currency].ask;
              const currencyName = exchangeRates[currency].name;

              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{(+value).toFixed(2)}</td>
                  <td>{currencyName}</td>
                  <td>{ask.toFixed(2)}</td>
                  <td>{(ask * +value).toFixed(2)}</td>
                  <td>Real</td>
                </tr>);
            },
          )}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  stateWallet: state.wallet.expenses,
});

Table.propTypes = {
  stateFormWallet: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps)(Table);
