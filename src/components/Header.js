import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  state = {
    totalField: ' 0.00',
    currencyField: 'BRL',
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
          {totalField}
        </p>
        <p data-testid="header-currency-field">{currencyField}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
