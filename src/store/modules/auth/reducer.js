const INITIAL_STATE = {
  token: null,
  signIn: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SIGN_IN_REQUEST':
      return { ...state };
    default:
      return state;
  }
}
