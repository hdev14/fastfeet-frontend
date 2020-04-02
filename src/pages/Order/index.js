import React from 'react';
import { GoPlus, GoSearch } from 'react-icons/go';
import { FaCircle } from 'react-icons/fa';


import { Container, Table, PrimaryButton } from '../../styles/utils';
import { Operations, Status, DeliverymanInfo } from './styles';

export default function Order() {
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
        <tr className="head">
          <th id="id">id</th>
          <th id="recipient">destinatário</th>
          <th>Entregador</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Status</th>
          <th id="action">Ações</th>
        </tr>

        <tr>
          <td>#01</td>
          <td>Ludwig van Beethoven</td>
          <td>
            <DeliverymanInfo>
              <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="" />
              <span>Jonh Doe</span>
            </DeliverymanInfo>
          </td>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <td colSpan={2}>
            <Status className="green">
              <FaCircle />
              entregue
            </Status>
          </td>
          <td>
            ...
          </td>
        </tr>
        <tr>
          <td>#01</td>
          <td>Ludwig van Beethoven</td>
          <td>
            <DeliverymanInfo>
              <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="" />
              <span>Jonh Doe</span>
            </DeliverymanInfo>
          </td>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <td colSpan={2}>
            <Status className="red">
              <FaCircle />
              cancelada
            </Status>
          </td>
          <td>
            ...
          </td>
        </tr>
      </Table>
    </Container>
  );
}
