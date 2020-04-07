import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import AvatarInput from './AvatarInput';

import {
  ContainerRegister, PrimaryButton, DefaultButton, UnForm,
} from '../../styles/utils';

export default function DeliverymanRegister() {
  return (
    <ContainerRegister>
      <div id="header">
        <h2>Cadastro de entregadores</h2>
        <div>
          <DefaultButton type="button">
            <Link to="/deliveryman">
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
        <AvatarInput name="avatar" />

        <label htmlFor="name">
          Nome
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Digite o nome do entregador"
          />
        </label>


        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Digite o email do entregador"
          />
        </label>

      </UnForm>
    </ContainerRegister>
  );
}
