import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../../components/Header';

const AuthConaiter = styled.div`
  height: 100%;
`;

export default function AuthLayout({ children }) {
  return (
    <AuthConaiter>
      <Header />
      {children}
    </AuthConaiter>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
