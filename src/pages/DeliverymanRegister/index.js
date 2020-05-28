import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import AvatarInput from '../../components/AvatarInput';
import Input from '../../components/Input';

import {
  ContainerRegister, PrimaryButton, DefaultButton, UnForm,
} from '../../styles/utils';

const schema = Yup.object().shape({
  avatar_id: Yup.number(),
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().required('E-mail é obrigatório'),
});

export default function DeliverymanRegister() {
  async function handleOnSubmit(data) {
    const response = await api.post('/deliveryman', data);
    if (response.status === 200) {
      toast.success('Entregador cadastrado com sucesso');
      history.push('/deliveryman');
    }
  }

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
          <PrimaryButton form="deliveryman-register" type="submit">
            <MdDone size={20} color="#fff" />
            SALVAR
          </PrimaryButton>
        </div>
      </div>
      <UnForm
        id="deliveryman-register"
        schema={schema}
        onSubmit={handleOnSubmit}
      >
        <AvatarInput name="avatar" />

        <Input name="name" label="Nome" />
        <br />

        <Input name="email" label="E-mail" />

      </UnForm>
    </ContainerRegister>
  );
}
