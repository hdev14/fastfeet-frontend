
export function signInRequest({ email, password }) {
  return {
    type: 'SIGN_IN_REQUEST'
    payload: {
      email,
      password,
    },
  };
}

export function signOut() {}
