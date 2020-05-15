import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import { darken } from 'polished';

export const Container = styled.div`
  width: 80%;
  margin: 0px auto;
  padding: 20px 0;

  h2 {
    font-size: 1.5rem;
    color: var(--dark-gray);
    margin: 30px 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: seperate;
  border-spacing: 0 20px;

  th, td {
    text-align: left;
    font-size: 1rem;
    padding: 12px;
  }

  tr.head {

    th {
      padding: 0 12px;
      width: 180px;
      color: var(--dark-gray);

      &#id {
        width: 50px !important;
        padding-left: 20px;
      }

      &:not(#id) {
        font-size: 1rem;
        text-transform: capitalize;
      }

      &#recipient, &#action {
        width: 220px;
      }

      &#action {
        text-align: right;
      }

    }
  }

  tr:not(.head) {
    background: white;
    border-radius: 4px;

    td {
      color: var(--medium-gray);
      vertical-align: middle;
      height: 50px;

      &:first-child {
        padding-left: 20px;
      }

      &:last-child {
        padding-right: 20px;
        text-align: right;
      }

      p {
        width: 600px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

`;

export const PrimaryButton = styled.button`
  border: none;
  background-color: var(--purple);
  padding: 6px 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 14px;

  &:hover {
    background-color: ${darken(0.05, '#7D40E7')};
  }

  svg {
    margin-right: 5px;
  }

  a {
    text-decoration: none;
    color: white;

    display: flex;
    align-items: center;
  }
`;

export const DefaultButton = styled.button`
  border: none;
  background-color: #ccc;
  padding: 6px 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 14px;

  &:hover {
    background-color: ${darken(0.05, '#ccc')};
  }

  svg {
    margin-right: 5px;
  }

  a {
    text-decoration: none;
    color: white;

    display: flex;
    align-items: center;
  }
`;

export const Actions = styled.div`
  position: relative;

  svg {
    cursor: pointer;
  }

  &.throuble ul {
    width: 200px;
    left: calc(100% - 47%);
  }

  ul {
    display: none;
    z-index: 10;
    position: absolute;
    top: 30px;
    left: calc(100% - 85px);
    list-style: none;
    border: 1px solid var(--light-gray);
    width: 150px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;

    &::before {
      position: absolute;
      top: -7.6px;
      left: calc(50% - 10px);
      content: '';
      width: 15px;
      height: 15px;
      border-top: 1px solid var(--light-gray);
      border-left: 1px solid var(--light-gray);
      background-color: white;
      transform: rotate(45deg);
    }

    li {

      display: flex;
      align-items: center;
      padding: 6px 0;
      font-weight: 400;
      color: var(--gray);
      cursor: pointer;

      & + li {
        border-top: 1px solid var(--light-gray);
      }
      svg {
        margin-right: 7px;
      }

      a {
        text-decoration: none;
        color: var(--gray);
      }
    }
  }

`;

export const Operations = styled.div`
  margin: 40px 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 250px;
    height: 40px;
    position: relative;

    input {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 0 10px 0 45px;
      border: 1px solid var(--light-gray);
      border-radius: 4px;
    }

    svg {
      position: absolute;
      left: 15px;
      top: 50%;
      fill: var(--gray);
      transform: translateY(-50%);
    }
  }
`;


export const ContainerRegister = styled(Container)`
    max-width: 900px;

    div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        color: var(--dark-gray);
        font-size: 1.5rem;
      }

      div {
        display: flex;
        height: 36px;
        button:first-child {
          margin-right: 15px;
        }
      }
    }
`;

export const Picture = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UnForm = styled(Form)`
  border-radius: 4px;
  background-color: white;
  padding: 30px;

  label {
    font-size: 14px;
    color: var(--dark-gray);
    font-weight: bold;
  }

  input, select {
    font-size: 16px;
    color: var(--medium-gray);
    padding: 0 5px 0 10px;
    margin-bottom: 20px;
    margin-top: 10px;
    height: 45px;
    border: 1px solid var(--light-gray);
    border-radius: 4px;
    width: 100%;
    background-color: white;
  }

  div#recipient-form {
    padding: 30px 0 60px;
    display: grid;
    grid-template-areas: 'name name name name name name name name name'
                        'street street street street street number number complement complement'
                        'city city city state state state cep cep cep';
    grid-row-gap: 50px;
    grid-column-gap: 10px;
    div {
      label, input {
        width: 100%;
      }

      input {
        margin: 10px 0 0 0;
      }

      &#input-name { grid-area: name; }
      &#input-street { grid-area: street; }
      &#input-number { grid-area: number; }
      &#input-complement { grid-area: complement; }
      &#input-city { grid-area: city; }
      &#input-state { grid-area: state; }
      &#input-cep { grid-area: cep; }
    }
  }

   div#order-form {
    padding: 30px 0 60px;
    display: flex;
    flex-direction: column;

    div#recipient-deliveryman {
      display: flex;
      width: 100%;

      label {
        width: 100%;

        &:first-child { margin-right: 30px; }
      }
    }

    div#input-product {
      margin-top: 30px;
      width: 100%;

      label { width: 100%; }
    }
  }
`;
