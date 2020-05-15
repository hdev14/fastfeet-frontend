import React, { useState, useEffect } from 'react';
import { GoPlus, GoSearch } from 'react-icons/go';
import { FaCircle } from 'react-icons/fa';
import { MdMoreHoriz, MdRemoveRedEye, MdCreate } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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
      console.tron.log(response);
      setOrders([...response.data]);
    }

    fetchOrders();
  }, []);

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
      console.tron.log(response);

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
          <input type="text" placeholder="Buscar por enconmendas" />
          <GoSearch size={20} />
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
              <td>{order.product}</td>
              <td>
                <DeliverymanInfo>
                  <Picture src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="" />
                  <span>{order.recipient.name}</span>
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
                      <Link to="/order/edit/1">
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
