import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import api from '../../services/api';

import Select from '../../components/Select';
import Input from '../../components/Input';

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

  async function handleSubmit(data) {
    console.tron.log(data);
  }

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
          <PrimaryButton form="order-edit" type="submit">
            <MdDone size={20} color="#fff" />
            SALVAR
          </PrimaryButton>
        </div>
      </div>

      <FormContainerOrder>
        <UnForm id="order-edit" onSubmit={handleSubmit}>
          <div id="order-form">
            <div id="recipient-deliveryman">
              <Select
                name="recipient"
                label="Destinatário"
              >
                {recipients.map((recipient) => (
                  <option
                    selected={order.recipient_id === recipient.id}
                    key={recipient.id}
                    value={recipient.id}
                  >
                    {recipient.name}
                  </option>
                ))}
              </Select>

              <Select
                name="deliveryman"
                label="Entregador"
              >
                {deliverymans.map((deliveryman) => (
                  <option
                    selected={order.deliveryman_id === deliveryman.id}
                    key={deliveryman.id}
                    value={deliveryman.id}
                  >
                    {deliveryman.name}
                  </option>
                ))}
              </Select>
            </div>

            <div id="input-product">
              <Input name="product" value={order.product} label="Nome do produto" />
            </div>
          </div>
        </UnForm>
      </FormContainerOrder>

    </ContainerRegister>
  );
}
