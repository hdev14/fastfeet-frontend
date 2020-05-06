import React from 'react';
import { Link } from 'react-router-dom';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import {
  ContainerRegister,
  DefaultButton,
  PrimaryButton,
  UnForm,
} from '../../styles/utils';

export default function RecipientRegister() {
  return (
    <ContainerRegister>
      <div id="header">
        <h2>Cadastro de destinatário</h2>
        <div>
          <DefaultButton type="button">
            <Link to="/recipient">
              <MdKeyboardArrowLeft size={20} color="#fff" />
              VOLTAR
            </Link>
          </DefaultButton>
          <PrimaryButton type="button">
            <MdDone size={20} color="#fff" />
            SALVAR
          </PrimaryButton>
        </div>
      </div>

      <UnForm>
        <div id="recipient-form">
          <div id="input-name">
            <label htmlFor="name">
              Nome
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Digite o nome do destinatário"
              />
            </label>
          </div>

          <div id="input-street">
            <label htmlFor="street">
              Rua
              <input
                id="street"
                name="street"
                type="text"
                placeholder="Digite a rua do destinatário"
              />
            </label>
          </div>

          <div id="input-number">
            <label htmlFor="number">
              Número
              <input
                id="number"
                name="number"
                type="number"
              />
            </label>
          </div>

          <div id="input-complement">
            <label htmlFor="complement">
              Complemento
              <input
                id="complement"
                name="complement"
                type="text"
              />
            </label>
          </div>

          <div id="input-city">
            <label htmlFor="city">
              Cidade
              <input
                id="city"
                name="city"
                type="text"
                placeholder="Digite a cidade"
              />
            </label>
          </div>

          <div id="input-state">
            <label htmlFor="state">
              Estado
              <input
                id="state"
                name="state"
                type="text"
                placeholder="Digite o estado"
              />
            </label>
          </div>
          <div id="input-cep">
            <label htmlFor="cep">
              CEP
              <input
                id="cep"
                name="cep"
                type="text"
                placeholder="Ex.: 00000-000"
              />
            </label>
          </div>

        </div>
      </UnForm>
    </ContainerRegister>
  );
}
