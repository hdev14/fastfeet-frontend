import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

export default function Input({
  name,
  value,
  label,
  ...rest
}) {
  const inputRef = useRef(null);
  const {
    fieldName,
    defaultValue,
    registerField,
    error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <label htmlFor={fieldName}>
      {label}
      <input
        type="text"
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        placeholder={value}
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </label>
  );
}

Input.defautlProps = {
  value: '',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
};
