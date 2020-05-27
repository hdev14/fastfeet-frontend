import React from 'react';
import PropTypes from 'prop-types';

import {
  ProblemModalContainer,
  Modal,
} from './styles';

export default function ProblemModal({ content }) {
  function handleClose(e) {
    const modal = e.target.firstChild;
    if (modal && modal.id === 'modal') {
      e.target.style.display = 'none';
    }
  }

  return (
    <ProblemModalContainer onClick={handleClose}>
      <Modal id="modal">
        <strong>visualizar problema</strong>
        <p id="problem-modal-content">
          {content}
        </p>
      </Modal>
    </ProblemModalContainer>
  );
}

ProblemModal.propTypes = {
  content: PropTypes.string.isRequired,
};
