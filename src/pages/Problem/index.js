import React from 'react';
import { MdCreate, MdMoreHoriz } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';

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
  function handleModal(modalId) {
    const modal = document.getElementById(modalId).firstChild;
    if (modal) {
      modal.style.display = 'block';
    }
  }

  function handleCancel() {
    const result = window.confirm('Tem certeza que deseja cancelar a encomenda?');
    if (result) {
      return;
    }
  }

  return (
    <Container>
      <h2>Problemas na entrega</h2>

      <Table>
        <thead>
          <tr className="head">
            <th id="id">Emcomenda</th>
            <th>Problema</th>
            <th id="action">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mauris et felis eleifend elementum vel quis lectus. Vivamus dapibus nisi augue, vitae ultrices ligula elementum at. Proin ut metus in mi tincidunt vestibulum a a felis. Aenean dictum libero eu urna tristique vestibulum. Fusce feugiat justo et augue facilisis, sit amet ornare eros consequat. Suspendisse semper risus feugiat nisl commodo, sed mollis neque auctor. Nullam eu fringilla lectus. Phasellus sed sapien sed turpis imperdiet maximus. Aenean ante nulla, bibendum non facilisis at, facilisis eget ex. In ut quam et tellus aliquet tincidunt.
              </p>
            </td>
            <td>
              <div id="modal">
                <ProblemModal />
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
                      onClick={handleCancel}
                      onKeyPress={handleCancel}
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
        </tbody>
      </Table>
    </Container>
  );
}
