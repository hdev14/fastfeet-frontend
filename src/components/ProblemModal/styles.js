import styled from 'styled-components';

export const ProblemModalContainer = styled.div`
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
  height: 300px;
  left: 50%;
  padding: 30px;
  position: absolute;
  text-align: left;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;

  strong {
    text-transform: uppercase;
  }

  p#throuble-modal-content {
    margin-top: 10px;
    overflow: normal;
    white-space: normal;
    width: 100%;
  }
`;
