// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

export const actionEmail = (email) => ({
  type: 'ACTION_EMAIL',
  payload: email,
});

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ACTION_EMAIL':
    return { ...state, email: action.payload };
  default:
    return { ...state };
  }
}

export default userReducer;
