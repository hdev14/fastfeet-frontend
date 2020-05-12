import React from 'react';
import * as Yup from 'yup';

import {
  SignInContainer,
  SignInForm,
  SignInLabel,
  SignInInput,
  SignInButton,
} from './styles';

import logo from '../../assets/fastfeet-logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha deve ter no minimo 6 caracteres')
    .required('Senha é obrigatório'),
});

export default function SignIn() {
  function handleSubmit(data) {
    return;
  }

  return (
    <SignInContainer>
      <img src={logo} alt="FastFeet" />
      <SignInForm onSubmit={handleSubmit} schema={schema}>
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
        <SignInButton type="submit">Entrar no sistema</SignInButton>
      </SignInForm>
    </SignInContainer>
  );
}
