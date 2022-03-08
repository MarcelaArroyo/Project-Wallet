// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export const actionFormWallet = (objeto) => ({
  type: 'ACTION_FORM',
  payload: objeto,
});

export const fetchExchangeRatesAPI = (state) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      dispatch(actionFormWallet({ ...state, exchangeRates: data }));
    });
};

function formWalletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ACTION_FORM':
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return { ...state };
  }
}

export default formWalletReducer;
