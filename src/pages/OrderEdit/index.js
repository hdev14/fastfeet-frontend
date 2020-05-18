import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import api from '../../services/api';

import {
  ContainerRegister,
  DefaultButton,
  PrimaryButton,
  UnForm,
} from '../../styles/utils';
import FormContainerOrder from './styles';

export default function OrderEdit() {
  const [order, setOrder] = useState({});
  const [recipients, setRecipients] = useState([]);
  const [deliverymans, setDeliverymans] = useState([]);

  const match = useRouteMatch('/order/edit/:id');

  useEffect(() => {
    async function fetchData() {
      const { id } = match.params;
      const responseOrder = await api.get(`/orders/${id}`);
      setOrder(responseOrder.data);

      const responseRecipient = await api.get('/recipients');
      setRecipients(responseRecipient.data);

      const responseDeliveryman = await api.get('/deliveryman');
      setDeliverymans(responseDeliveryman.data);
    }

    fetchData();
  }, []);

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
                  value={order.recipient_id}
                >
                  {recipients.map((recipient) => (
                    <option key={recipient.id} value={recipient.id}>
                      {recipient.name}
                    </option>
                  ))}
                </select>
              </label>

              <label htmlFor="select-deliveryman">
                Entregador
                <select
                  id="select-deliveryman"
                  name="select-deliveryman"
                  placeholder="Escolha o entregador"
                  value={order.deliveryman_id}
                >
                  {deliverymans.map((deliveryman) => (
                    <option key={deliveryman.id} value={deliveryman.id}>
                      {deliveryman.name}
                    </option>
                  ))}
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

OrderEdit.propTypes = {
  match: PropTypes.object.isRequired,
};
