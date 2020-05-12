import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import { darken } from 'polished';

export const SignInContainer = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;
  max-width: 360px;
  margin: 0 auto;
  border-radius: 4px;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 60px 30px;
`;

export const SignInForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const SignInLabel = styled.label`
  color: var(--dark-gray);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  margin: 15px 0 10px;
`;

export const SignInInput = styled.input`
  width: 300px;
  height: 45px;
  border-radius: 4px;
  border: 1px solid var(--light-gray);
  padding: 0 15px;
  font-weight: 400;
  transition: border .2s ease-out;
  color: var(--gray);
  &:focus {
    border: 2px solid var(--purple);
  }

`;

export const SignInButton = styled.button`
  margin-top: 15px;
  height: 45px;
  border: none;
  background-color: var(--purple);
  color: white;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color .2s;

  &:hover {
    background-color: ${darken(0.03, '#7D40E7')};
  }
`;
