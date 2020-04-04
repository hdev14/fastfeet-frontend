import React from 'react';
import { MdCreate, MdMoreHoriz } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';


import {
  Container,
  Table,
  Actions,
} from '../../styles/utils';

import handleAction from '../../functions/handleAction';

export default function Throuble() {
  return (
    <Container>
      <h2>Problemas na entrega</h2>

      <Table>
        <thead>
          <tr className="head">
            <th id="id">ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th id="action">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <Actions>
                <MdMoreHoriz size={24} color="#666" onClick={handleAction} />
                <ul style={{ display: 'none' }}>
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
