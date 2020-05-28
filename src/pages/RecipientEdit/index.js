import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '../../services/api';
import history from '../../services/history';

import Input from '../../components/Input';

import {
  ContainerRegister,
  DefaultButton,
  PrimaryButton,
  UnForm,
} from '../../styles/utils';

const cepRegex = /[\d]{5}-[\d]{3}/g;

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  street: Yup.string().required('Rua é obrigatório'),
  state: Yup.string().required('Estado é obrigatório'),
  city: Yup.string().required('Cidade é obrigatório'),
  cep: Yup.string()
    .matches(cepRegex, 'CEP inválido')
    .required('CEP é obrigatório'),
  complement: Yup.string(),
  number: Yup.number()
    .moreThan(0, 'Não pode ser zero')
    .required('Número é obrigatório'),
});


export default function RecipientEdit() {
  const [recipient, setRecipient] = useState({});

  const match = useRouteMatch('/recipient/edit/:id');

  useEffect(() => {
    async function fetchRecipient() {
      const { id } = match.params;
      const response = await api.get(`/recipients/${id}`);
      setRecipient(response.data);
    }

    fetchRecipient();
  }, []);

  async function handleOnSubmit(data) {
    const response = await api.put(`/recipients/${recipient.id}`, data);
    if (response.status === 200) {
      toast.info('Destinatário atualizado com sucesso');
      history.push('/recipient');
    }
  }

  return (
    <ContainerRegister>
      <div id="header">
        <h2>Editar destinatário</h2>
        <div>
          <DefaultButton type="button">
            <Link to="/recipient">
              <MdKeyboardArrowLeft size={20} color="#fff" />
              VOLTAR
            </Link>
          </DefaultButton>
          <PrimaryButton form="recipient-edit" type="submit">
            <MdDone size={20} color="#fff" />
            SALVAR
          </PrimaryButton>
        </div>
      </div>

      <UnForm
        id="recipient-edit"
        onSubmit={handleOnSubmit}
        schema={schema}
      >
        <div id="recipient-form">
          <div id="input-name">
            <Input
              name="name"
              label="Nome"
              value={recipient.name}
            />
          </div>

          <div id="input-street">
            <Input
              name="street"
              label="Rua"
              value={recipient.street}
            />
          </div>

          <div id="input-number">
            <Input
              name="number"
              label="Número"
              type="number"
              value={recipient.number}
            />
          </div>

          <div id="input-complement">
            <Input
              name="complement"
              label="Complemento"
              type="text"
              value={recipient.complement}
            />
          </div>

          <div id="input-city">
            <Input
              name="city"
              label="Cidade"
              type="text"
              value={recipient.city}
            />
          </div>

          <div id="input-state">
            <Input
              name="state"
              label="Estado"
              type="text"
              value={recipient.state}
            />
          </div>
          <div id="input-cep">
            <Input
              name="cep"
              label="CEP"
              type="text"
              value={recipient.cep}
            />
          </div>
        </div>
      </UnForm>
    </ContainerRegister>
  );
}
