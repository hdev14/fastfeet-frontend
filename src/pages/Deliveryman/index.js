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
  Picture,
} from '../../styles/utils';

import handleAction from '../../functions/handleAction';

export default function Deliveryman() {
  function handleDelete() {
    const result = window.confirm('Tem certeza que deseja excluir esse entregador?');
    if (result) {
      return;
    }
  }

  return (
    <Container>
      <h2>Genrenciar entregadores</h2>

      <Operations>
        <div>
          <input type="text" placeholder="Buscar por entregadores" />
          <GoSearch size={20} />
        </div>

        <PrimaryButton>
          <Link to="/deliveryman/register">
            <GoPlus size={20} color="#fff" />
            casdastrar
          </Link>
        </PrimaryButton>
      </Operations>

      <Table>
        <thead>
          <tr className="head">
            <th>ID</th>
            <th id="picture">Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th id="action">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>
              <Picture src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="" />
            </td>
            <td>
              John Doe
            </td>
            <td>
              johndoe@email.com
            </td>
            <td>
              <Actions>
                <MdMoreHoriz size={24} color="#666" onClick={handleAction} />
                <ul style={{ display: 'none' }}>
                  <li>
                    <Link to="/deliveryman/edit/1">
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
