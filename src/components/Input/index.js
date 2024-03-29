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
        id={fieldName}
        ref={inputRef}
        defaultValue={value}
        placeholder={value}
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </label>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
};
