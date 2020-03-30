import React from 'react';
import PropTypes from 'prop-types';

export default function DefaultLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfTypes([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
