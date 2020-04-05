import React from 'react';
import { GoPlus, GoSearch } from 'react-icons/go';
import { FaCircle } from 'react-icons/fa';
import { MdMoreHoriz, MdRemoveRedEye, MdCreate } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';


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
  function handleModal(e) {
    // const modal = e.target.nexSibling;
    // console.log(modal);
    // if (modal) {
    //   modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
    // }
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
          <GoPlus size={20} color="#fff" />
          casdastrar
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
              {/* <OrderModal idModal="modal-id" /> */}
              <Actions>
                <MdMoreHoriz size={24} color="#666" onClick={handleAction} />
                <ul style={{ display: 'none' }}>
                  <li>
                    <div
                      onClick={handleModal}
                      onKeyPress={handleModal}
                      role="button"
                      tabIndex={0}
                    >
                      <MdRemoveRedEye size={16} color="#8E5BE8" />
                      Visualizar
                    </div>
                  </li>
                  <li>
                    <MdCreate size={16} color="#4D85EE" />
                    Editar
                  </li>
                  <li>
                    <IoMdTrash size={16} color="#DE3B3B" />
                    Excluir
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
