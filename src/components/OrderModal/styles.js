import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 11;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 4px;
  padding: 30px;
  width: 400px;
  text-align: left !important;

  div {
    padding: 10px 0;

    & + div {
      border-top: 1px solid #eee;
    }

    strong {
      font-size: 14px;
      color: var(--dark-gray);
      line-height: 24px;
    }

    ul {
      list-style: none;

      li {
        font-size: 16px;
        line-height: 24px;
        color: var(--medium-gray);
      }
    }
  }
`;

export const ModalHeader = styled.div`
`;

export const ModalBody = styled.div`

`;

export const ModalFooter = styled.div`
  img {
    margin: 20px 0;
    height: 50px;
    width: 100%;
    object-fit: cover;
  }
`;
