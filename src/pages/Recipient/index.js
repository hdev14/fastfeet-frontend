import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoSearch, GoPlus } from 'react-icons/go';
import { MdCreate, MdMoreHoriz } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { toast } from 'react-toastify';

import api from '../../services/api';

import {
  Container,
  Operations,
  Table,
  PrimaryButton,
  Actions,
} from '../../styles/utils';

import handleAction from '../../functions/handleAction';

export default function Recipient() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function fetchRecipients() {
      const response = await api.get('/recipients');
      setRecipients(response.data);
    }

    fetchRecipients();
  }, []);

  async function handleOnKeyPressSearch(e) {
    const { target: element, key } = e;

    if (key === 'Enter') {
      const response = await api.get('/recipients', {
        params: { q: element.value },
      });

      if (response.status === 200) {
        if (response.data.length === 0) {
          toast.warn('Não há nenhum destinatário com esse nome');
          return;
        }

        setRecipients(response.data);
      }
    }
  }

  async function handleDelete(recipientId) {
    const result = window.confirm('Tem certeza que deseja excluir este destinatário?');
    if (result) {
      const response = await api.delete(`/recipients/${recipientId}`);
      if (response.status === 200) {
        const newData = recipients.filter((r) => r.id !== recipientId);
        setRecipients(newData);
        toast.success('Destinatário exluído com sucesso');
      }
    }
  }

  return (
    <Container>
      <h2>Genrenciar distinatários</h2>

      <Operations>
        <div>
          <input
            type="text"
            placeholder="Buscar por distinatários"
            onKeyPress={handleOnKeyPressSearch}
          />
          <GoSearch size={20} />
          <small>Após digitar precione a tecla Enter.</small>
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
          {recipients.map((recipient, index) => (
            <tr key={recipient.id}>
              <td>{`#${index}`}</td>
              <td>{recipient.name}</td>
              <td>
                {recipient.street}, {recipient.number}, {recipient.city} - {recipient.state}
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
                        onClick={() => handleDelete(recipient.id)}
                        onKeyPress={() => handleDelete(recipient.id)}
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
