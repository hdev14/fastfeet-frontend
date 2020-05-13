import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signIn: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case 'SIGN_IN_SUCCESS': {
        draftState.token = action.payload.token;
        draftState.signIn = true;
        break;
      }

      default:
    }
  });
}
