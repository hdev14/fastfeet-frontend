import React, { useState, useEffect } from 'react';
import { GoPlus, GoSearch } from 'react-icons/go';
import { FaCircle } from 'react-icons/fa';
import { MdMoreHoriz, MdRemoveRedEye, MdCreate } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import pt_br from 'date-fns/locale/pt-BR';

import api from '../../services/api';

import OrderModal from '../../components/OrderModal';

import {
  Container,
  Operations,
  Table,
  PrimaryButton,
  Actions,
  Picture,
} from '../../styles/utils';
import { Status, DeliverymanInfo } from './styles';

import handleAction from '../../functions/handleAction';

export default function Order() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get('/orders');
      const data = response.data.map((order) => {
        if (order.start_date || order.end_date) {
          return {
            ...order,
            start_date: format(
              new Date(order.start_date),
              'dd/MM/yyyy',
              { locale: pt_br },
            ),
            end_date: format(
              new Date(order.end_date),
              'dd/MM/yyyy',
              { locale: pt_br },
            ),
          };
        }

        return order;
      });

      setOrders(data);
    }

    fetchOrders();
  }, []);

  async function handleOnKeyPressSearch(e) {
    const { target: element, key } = e;
    if (key === 'Enter') {
      const response = await api.get('/orders', { params: { q: element.value } });

      if (response.status === 200) {
        if (response.data.length === 0) {
          toast.warn('Não há nenhuma encomenda com essa produto');
          return;
        }

        setOrders(response.data);
      }
    }
  }

  function handleModal(modalId) {
    const modal = document.getElementById(modalId).firstChild;
    if (modal) {
      modal.style.display = 'block';
    }
  }

  async function handleDelete(orderId) {
    const result = window.confirm('Tem certeza que deseja excluir esse encomenda?');
    if (result) {
      const response = await api.delete(`/orders/${orderId}`);

      if (response.status === 200) {
        const newOrders = orders.filter((order) => order.id !== orderId);
        setOrders(newOrders);
        toast.success('Encomenda excluída!');
      }
    }
  }

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>

      <Operations>
        <div>
          <input
            type="text"
            placeholder="Pesquisar pelo produto"
            onKeyPress={handleOnKeyPressSearch}
          />
          <GoSearch size={20} />
          <small>Após digitar precione a tecla Enter.</small>
        </div>

        <PrimaryButton type="button">
          <Link to="/order/register">
            <GoPlus size={20} color="#fff" />
            casdastrar
          </Link>
        </PrimaryButton>
      </Operations>
      <Table>

        <thead>
          <tr className="head">
            <th id="id">ID</th>
            <th id="recipient">destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th id="action">Ações</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{`#${index}`}</td>
              <td>{order.recipient.name}</td>
              <td>
                <DeliverymanInfo>
                  <Picture
                    src={order.deliveryman.avatar && order.deliveryman.avatar.url}
                    alt={order.deliveryman.avatar ? order.deliveryman.avatar.name : ''}
                  />
                  <span>{order.deliveryman.name}</span>
                </DeliverymanInfo>
              </td>
              <td>{order.recipient.city}</td>
              <td>{order.recipient.state}</td>
              <td>
                <Status className="green">
                  <FaCircle />
                  entregue
                </Status>
              </td>
              <td>
                <div id="modal">
                  <OrderModal data={order} />
                </div>
                <Actions>
                  <MdMoreHoriz size={24} color="#666" onClick={handleAction} />
                  <ul style={{ display: 'none' }}>
                    <li>
                      <div
                        role="button"
                        onClick={() => handleModal('modal')}
                        onKeyPress={() => handleModal('modal')}
                        tabIndex={0}
                      >
                        <MdRemoveRedEye size={16} color="#8E5BE8" />
                        Visualizar
                      </div>
                    </li>
                    <li>
                      <Link to={`/order/edit/${order.id}`}>
                        <MdCreate size={16} color="#4D85EE" />
                        Editar
                      </Link>
                    </li>
                    <li>
                      <div
                        role="button"
                        onClick={() => handleDelete(order.id)}
                        onKeyPress={() => handleDelete(order.id)}
                        tabIndex={0}
                      >
                        <IoMdTrash size={16} color="#DE3B3B" />
                        Excluir
                      </div>
                    </li>
                  </ul>
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


    </Container>
  );
}
