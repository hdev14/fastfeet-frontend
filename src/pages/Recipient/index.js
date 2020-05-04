import React from 'react';
import { Link } from 'react-router-dom';
import { GoSearch, GoPlus } from 'react-icons/go';
import { MdCreate, MdMoreHoriz } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';


import {
  Container,
  Operations,
  Table,
  PrimaryButton,
  Actions,
} from '../../styles/utils';

import handleAction from '../../functions/handleAction';

export default function Recipient() {
  function handleDelete() {
    const result = window.confirm('Tem certeza que deseja excluir este destinatário?');
    if (result) {
      return;
    }
  }

  return (
    <Container>
      <h2>Genrenciar distinatários</h2>

      <Operations>
        <div>
          <input type="text" placeholder="Buscar por distinatários" />
          <GoSearch size={20} />
        </div>

        <PrimaryButton type="button">
          <Link to="/recipient/register">
            <GoPlus size={20} color="#fff" />
            casdastrar
          </Link>
        </PrimaryButton>
      </Operations>

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
