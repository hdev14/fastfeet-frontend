import React from 'react';
import { Link } from 'react-router-dom';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import {
  ContainerRegister,
  DefaultButton,
  PrimaryButton,
  UnForm,
} from '../../styles/utils';
import FormContainerOrder from './styles';

export default function OrderEdit() {
  return (
    <ContainerRegister>
      <div id="header">
        <h2>Editar encomenda</h2>
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
            <div id="recipient-deliveryman">
              <label htmlFor="select-recipient">
                Destinatário
                <select
                  id="select-recipient"
                  name="recipient"
                  placeholder="Escolha o destinatário"
                >
                  <option value="1">recipient 1</option>
                  <option value="2">recipient 2</option>
                  <option value="3">recipient 3</option>
                </select>
              </label>

              <label htmlFor="select-deliveryman">
                Entregador
                <select
                  id="select-deliveryman"
                  name="select-deliveryman"
                  placeholder="Escolha o entregador"
                >
                  <option value="1">deliveryman 1</option>
                  <option value="2">deliveryman 2</option>
                  <option value="3">deliveryman 3</option>
                </select>
              </label>
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
