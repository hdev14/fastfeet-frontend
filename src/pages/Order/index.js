import React from 'react';
import { GoPlus, GoSearch } from 'react-icons/go';
import { FaCircle } from 'react-icons/fa';
import { MdMoreHoriz, MdRemoveRedEye, MdCreate } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';


import {
  Container,
  Operations,
  Table,
  PrimaryButton,
  Actions,
  Picture,
} from '../../styles/utils';
import { Status, DeliverymanInfo } from './styles';

export default function Order() {
  function handleActionOnClick(e) {
    const menu = e.target.nextSibling;
    if (menu && menu.style) {
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
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
          <GoPlus size={20} color="#fff" />
          casdastrar
        </PrimaryButton>
      </Operations>
      <Table>

        <thead>
          <tr className="head">
            <th id="id">id</th>
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
              <Actions>
                <MdMoreHoriz size={24} color="#666" onClick={handleActionOnClick} />
                <ul style={{ display: 'none' }}>
                  <li>
                    <MdRemoveRedEye size={16} color="#8E5BE8" />
                    Visualizar
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
