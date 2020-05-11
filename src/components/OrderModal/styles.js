import styled from 'styled-components';

export const ContainerModal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: none;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 11;
`;

export const Modal = styled.div`
  background-color: white;
  border-radius: 4px;
  cursor: not-allowed;
  left: 50%;
  padding: 30px;
  position: absolute;
  text-align: left !important;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;

  div {
    padding: 10px 0;

    & + div {
      border-top: 1px solid #eee;
    }

    strong {
      color: var(--dark-gray);
      font-size: 14px;
      line-height: 24px;
    }

    ul {
      list-style: none;

      li {
        color: var(--medium-gray);
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
`;

export const ModalFooter = styled.div`
  img {
    height: 50px;
    margin: 20px 0;
    object-fit: cover;
    width: 100%;
  }
`;
