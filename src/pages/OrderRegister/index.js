import React from 'react';
import { Link } from 'react-router-dom';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import Select from 'react-select';

import {
  ContainerRegister,
  DefaultButton,
  PrimaryButton,
  UnForm,
} from '../../styles/utils';
import FormContainerOrder from './styles';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function OrderRegister() {
  return (
    <ContainerRegister>
      <div id="header">
        <h2>Cadastro de destinatário</h2>
        <div>
          <DefaultButton type="button">
            <Link to="/order">
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

      <FormContainerOrder>
        <UnForm>
          <div id="order-form">
            <div id="input-recipient">
              <Select
                className="basic-single"
                classNamePrefix="select"
                options={options}
              />
            </div>

            <div id="input-deliveryman">
              <Select
                className="basic-single"
                classNamePrefix="select"
                options={options}
              />
            </div>

            <div id="input-product">
              <label htmlFor="product">
                Nome do produto
                <input
                  id="product"
                  name="product"
                  type="text"
                />
              </label>
            </div>
          </div>
        </UnForm>
      </FormContainerOrder>

    </ContainerRegister>
  );
}
