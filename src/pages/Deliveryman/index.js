import React , { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import { GoSearch, GoPlus } from 'react-icons/go';
import { MdCreate, MdMoreHoriz } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';

import api from '../../services/api';

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
  const [deliverymans, setDeliverymans] = useState([]);

  useEffect(() => {
    async function fetchDeliverymans() {
      const response = await api.get('/deliveryman');
      console.tron.log(response.data);
      setDeliverymans(response.data);
    }

    fetchDeliverymans();
  }, []);

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
          {deliverymans.map((deliveryman, index) => (
            <tr key={deliveryman.id}>
              <td>{`#${index}`}</td>
              <td>
                <Picture src={deliveryman.avatar && deliveryman.avatar.url} alt="" />
              </td>
              <td>
                {deliveryman.name}
              </td>
              <td>
                {deliveryman.email}
              </td>
              <td>
                <Actions>
                  <MdMoreHoriz
                    size={24}
                    color="#666"
                    onClick={handleAction}
                  />
                  <ul style={{ display: 'none' }}>
                    <li>
                      <Link to={`/deliveryman/edit/${deliveryman.id}`}>
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
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
