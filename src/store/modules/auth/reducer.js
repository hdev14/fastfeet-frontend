import produce from 'immer';

import { authTypes } from '../actionsTypes';

const INITIAL_STATE = {
  token: null,
  signIn: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case authTypes.SIGN_IN_SUCCESS: {
        draftState.token = action.payload.token;
        draftState.signIn = true;
        break;
      }

      case authTypes.SIGN_OUT: {
        draftState.token = null;
        draftState.signIn = false;
        break;
      }

      default:
    }
  });
}
