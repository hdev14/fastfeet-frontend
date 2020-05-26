import React, { useState, useRef, useEffect } from 'react';
import { MdImage } from 'react-icons/md';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import api from '../../services/api';

import AvatarContainer from './styles';

export default function AvatarInput({ defaultFile, defaultPreview }) {
  const ref = useRef();
  const { registerField } = useField('avatar');
  const [file, setFile] = useState(defaultFile);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleOnChange(e) {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    const response = await api.post('/files', formData);
    if (response.status === 200) {
      const { id, url } = response.data;
      setFile(id);
      setPreview(url);
    }
  }

  return (
    <AvatarContainer>
      <label forHtml="avatar">
        <img src={preview || defaultPreview} alt="" />
        <MdImage color="#DDDDDD" size={40} />
        <strong>Adicionar foto</strong>
        <input
          id="avatar"
          type="file"
          accept="images/*"
          data-file={file}
          ref={ref}
          onChange={handleOnChange}
        />
      </label>
    </AvatarContainer>
  );
}

AvatarInput.propTypes = {
  defaultFile: PropTypes.number.isRequired,
  defaultPreview: PropTypes.string.isRequired,
};
