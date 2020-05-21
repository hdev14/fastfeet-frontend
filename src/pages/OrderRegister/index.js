import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '../../services/api';
import history from '../../services/history';

import Select from '../../components/Select';
import Input from '../../components/Input';

import {
  ContainerRegister,
  DefaultButton,
  PrimaryButton,
  UnForm,
} from '../../styles/utils';
import FormContainerOrder from './styles';

const schema = Yup.object().shape({
  recipient: Yup.number().required(),
  deliveryman: Yup.number().required(),
  product: Yup.string().required('O nome do produto é necessário'),
});

export default function OrderRegister() {
  const [recipients, setRecipients] = useState([]);
  const [deliverymans, setDeliverymans] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const responseRecipients = await api.get('/recipients');
      setRecipients(responseRecipients.data);

      const responseDeliverymans = await api.get('/deliveryman');
      setDeliverymans(responseDeliverymans.data);
    }

    fetchData();
  }, []);

  async function handleOnSubmit({ recipient, deliveryman, product }) {
    const response = await api.post('/orders', {
      recipient_id: recipient,
      deliveryman_id: deliveryman,
      product,
    });

    if (response.status === 200) {
      toast.success('Encomenda registrada com sucesso.');
      history.push('/order');
    }
  }

  return (
    <ContainerRegister>
      <div id="header">
        <h2>Cadastro de encomendas</h2>
        <div>
          <DefaultButton type="button">
            <Link to="/order">
              <MdKeyboardArrowLeft size={20} color="#fff" />
              VOLTAR
            </Link>
          </DefaultButton>
          <PrimaryButton form="order-register" type="submit">
            <MdDone size={20} color="#fff" />
            SALVAR
          </PrimaryButton>
        </div>
      </div>

      <FormContainerOrder>
        <UnForm
          id="order-register"
          onSubmit={handleOnSubmit}
          schema={schema}
        >
          <div id="order-form">
            <div id="recipient-deliveryman">
              <Select name="recipient" label="Destinatário">
                {recipients.map((recipient) => (
                  <option key={recipient.id} value={recipient.id}>
                    {recipient.name}
                  </option>
                ))}
              </Select>

              <Select name="deliveryman" label="Entregador">
                {deliverymans.map((deliveryman) => (
                  <option key={deliveryman.id} value={deliveryman.id}>
                    {deliveryman.name}
                  </option>
                ))}
              </Select>
            </div>

            <div id="input-product">
              <Input name="product" label="Produto" />
            </div>
          </div>
        </UnForm>
      </FormContainerOrder>

    </ContainerRegister>
  );
}
