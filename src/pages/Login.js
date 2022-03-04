import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionEmail } from '../reducers/user';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    disabled: 'disabled',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => this.enabledButton());
  };

  enabledButton = () => {
    const { email, senha } = this.state;
    const maxLength = 6;
    if (senha.length >= maxLength && email.includes('@') && email.includes('.com')) {
      this.setState({
        disabled: '',
      });
    } else {
      this.setState({
        disabled: 'disabled',
      });
    }
  }

  render() {
    const { email, senha, disabled } = this.state;
    const { emailLogin } = this.props;
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            data-testid="password-input"
            type="password"
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => emailLogin(email) }
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailLogin: (email) => { dispatch(actionEmail(email)); },
});

Login.propTypes = {
  emailLogin: PropTypes.string,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
