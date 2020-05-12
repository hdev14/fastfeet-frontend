import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  align-items: center;
  jjustify-content: center;
  background-color: var(--purple);
  height: 100vh;
`;

export default function DefaultLayout({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
