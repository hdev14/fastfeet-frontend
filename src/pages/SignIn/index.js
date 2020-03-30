import React from 'react';

import {
  SignInContainer,
  SignInForm,
  SignInLabel,
  SignInInput,
  SignInButton,
} from './styles';

import logo from '../../assets/fastfeet-logo.png';

export default function SignIn() {
  return (
    <SignInContainer>
      <img src={logo} alt="FastFeet" />
      <SignInForm>
        <SignInLabel forHtml="email">seu e-mail</SignInLabel>
        <SignInInput
          id="email"
          name="email"
          type="text"
          placeholder="Digite seu e-mail"
        />
        <SignInLabel forHtml="password">sua senha</SignInLabel>
        <SignInInput
          id="passord"
          name="password"
          type="password"
          placeholder="Digite sua senha"
        />
        <SignInButton type="button">Entrar no sistema</SignInButton>
      </SignInForm>
    </SignInContainer>
  );
}
