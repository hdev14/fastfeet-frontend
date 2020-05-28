import React, { useState, useEffect } from 'react';
import { MdCreate, MdMoreHoriz } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { toast } from 'react-toastify';

import api from '../../services/api';

import ProblemModal from '../../components/ProblemModal';

import {
  Container,
  Table,
  Actions,
} from '../../styles/utils';

import handleAction from '../../functions/handleAction';

const style = {
  ul: {
    display: 'none',
    width: '220px',
    left: '95px',
  },
};

export default function Problem() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function fetchProblems() {
      const response = await api.get('/delivery/problem');
      const data = response.data.filter((p) => {
        return p.orders && !p.orders.canceled_at;
      });

      setProblems(data);
    }

    fetchProblems();
  }, []);
  function handleModal(modalId) {
    const modal = document.getElementById(modalId).firstChild;
    if (modal) {
      modal.style.display = 'block';
    }
  }

  async function handleCancel(problemId) {
    const result = window.confirm('Tem certeza que deseja cancelar a encomenda?');
    if (result) {
      const response = await api.delete(
        `/delivery/problem/${problemId}/cancel-delivery`,
      );

      if (response.status === 200) {
        const newData = problems.filter((p) => p.id !== problemId);
        setProblems(newData);

        toast.success('Problema excluído com sucesso');
      }
    }
  }

  return (
    <Container>
      <h2>Problemas nas entregas</h2>

      <Table>
        <thead>
          <tr className="head">
            <th id="id">Emcomenda</th>
            <th>Problema</th>
            <th id="action">Ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td>{`#${problem.orders.id}`}</td>
              <td>
                <p>{problem.description}</p>
              </td>
              <td>
                <div id="modal">
                  <ProblemModal content={problem.description} />
                </div>
                <Actions className="problem">
                  <MdMoreHoriz size={24} color="#666" onClick={handleAction} />
                  <ul style={style.ul}>
                    <li>
                      <div
                        role="button"
                        onClick={() => handleModal('modal')}
                        onKeyPress={() => handleModal('modal')}
                        tabIndex={0}
                      >
                        <MdCreate size={16} color="#4D85EE" />
                        Visualizar
                      </div>
                    </li>
                    <li>
                      <div
                        role="button"
                        onClick={() => handleCancel(problem.id)}
                        onKeyPress={() => handleCancel(problem.id)}
                        tabIndex={0}
                      >
                        <IoMdTrash size={16} color="#DE3B3B" />
                        Cancelar encomenda
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
