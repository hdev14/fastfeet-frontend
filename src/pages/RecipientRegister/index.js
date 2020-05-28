import React from 'react';
import { Link } from 'react-router-dom';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

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


export default function RecipientRegister() {
  async function handleOnSubmit(data) {
    const response = await api.post('/recipients', data);
    if (response.status === 200) {
      toast.success('Destinatário registrado com sucesso');
      history.push('/recipient');
    }
  }

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
          <PrimaryButton form="recipient-register" type="submit">
            <MdDone size={20} color="#fff" />
            SALVAR
          </PrimaryButton>
        </div>
      </div>

      <UnForm
        id="recipient-register"
        onSubmit={handleOnSubmit}
        schema={schema}
      >
        <div id="recipient-form">
          <div id="input-name">
            <Input
              name="name"
              label="Nome"
              placeholder="Digite o nome do destinatário"
            />
          </div>

          <div id="input-street">
            <Input
              name="street"
              label="Rua"
              placeholder="Digite a rua do destinatário"
            />
          </div>

          <div id="input-number">
            <Input
              name="number"
              label="Número"
              type="number"
              value={0}
            />
          </div>

          <div id="input-complement">
            <Input
              name="complement"
              label="Complemento"
              type="text"
            />
          </div>

          <div id="input-city">
            <Input
              name="city"
              label="Cidade"
              type="text"
              placeholder="Digite a cidade"
            />
          </div>

          <div id="input-state">
            <Input
              name="state"
              label="Estado"
              type="text"
              placeholder="Digite o estado"
            />
          </div>
          <div id="input-cep">
            <Input
              name="cep"
              label="CEP"
              type="text"
              placeholder="Ex.: 00000-000"
            />
          </div>

        </div>
      </UnForm>
    </ContainerRegister>
  );
}
