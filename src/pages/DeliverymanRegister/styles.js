import styled from 'styled-components';
import { Container } from '../../styles/utils';

const ContainerRegister = styled(Container)`
    max-width: 900px;

    div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        color: var(--dark-gray);
        font-size: 1.5rem;
      }

      div {
        display: flex;
        height: 36px;
        button:first-child {
          margin-right: 15px;
        }
      }
    }
`;

export default ContainerRegister;
