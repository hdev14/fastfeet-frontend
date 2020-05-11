import React from 'react';
import { GoPlus, GoSearch } from 'react-icons/go';
import { FaCircle } from 'react-icons/fa';
import { MdMoreHoriz, MdRemoveRedEye, MdCreate } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { Link } from 'react-router-dom';

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
  function handleModal(modalId) {
    const modal = document.getElementById(modalId).firstChild;
    if (modal) {
      modal.style.display = 'block';
    }
  }

  function handleDelete() {
    const result = window.confirm('Tem certeza que deseja excluir esse encomenda?');
    if (result) {
      return;
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
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>
              <DeliverymanInfo>
                <Picture src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="" />
                <span>Jonh Doe</span>
              </DeliverymanInfo>
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status className="green">
                <FaCircle />
                entregue
              </Status>
            </td>
            <td>
              <div id="modal">
                <OrderModal />
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
                      onClick={handleDelete}
                      onKeyPress={handleDelete}
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
        </tbody>
      </Table>


    </Container>
  );
}
