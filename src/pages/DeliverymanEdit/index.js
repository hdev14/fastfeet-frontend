import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import api from '../../services/api';

import AvatarInput from '../../components/AvatarInput';
import Input from '../../components/Input';

import {
  ContainerRegister, PrimaryButton, DefaultButton, UnForm,
} from '../../styles/utils';

export default function DeliverymanEdit() {
  const [deliveryman, setDeliveryman] = useState({});
  const match = useRouteMatch('/deliveryman/edit/:id');

  useEffect(() => {
    async function fetchDeliveryman() {
      const { id } = match.params;
      const response = await api.get(`/deliveryman/${id}`);
      setDeliveryman(response.data);
    }

    fetchDeliveryman();
  }, []);

  return (
    <ContainerRegister>
      <div id="header">
        <h2>Editar entregador</h2>
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

        <Input
          name="name"
          label="Nome"
          value={deliveryman.name}
        />

        <Input
          name="email"
          label="E-mail"
          type="email"
          value={deliveryman.email}
        />

      </UnForm>
    </ContainerRegister>
  );
}
