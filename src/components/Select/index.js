import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

export default function Select({ name, label, children }) {
  const inputRef = useRef(null);
  const {
    fieldName,
    defaultValue,
    registerField,
    error,
  } = useField(name);

  useEffect(() => {
    console.tron.log(defaultValue);

    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <label htmlFor="select-recipient">
      {label}
      <select
        id={fieldName}
        ref={inputRef}
        placeholder="Escolha o destinatário"
        defautlValue={defaultValue}
      >
        {children}
      </select>

      {error && <span className="error">{error}</span>}
    </label>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
