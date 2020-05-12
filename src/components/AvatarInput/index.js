import React, { useState, useRef, useEffect } from 'react';
import { MdImage } from 'react-icons/md';
import { useField } from '@rocketseat/unform';

import AvatarContainer from './styles';

export default function AvatarInput() {
  const ref = useRef();
  //onst [defaultValue, registerField] = useField('avatar');
  const [file, setFile] = useState('');
  const [preview, setPreview] = useState('');

  // useEffect(() => {
  //   if (ref.current) {
  //     registerField({
  //       name: 'avatar_id',
  //       ref: ref.current,
  //       path: 'dataset.file',
  //     });
  //   }
  // }, [ref, registerField]);

  // function handleOnChange(e) {
  //   // TODO
  // }

  return (
    <AvatarContainer>
      <label forHtml="avatar">
        <img src="" alt="" />
        <MdImage color="#DDDDDD" size={40} />
        <strong>Adicionar foto</strong>
        <input
          id="avatar"
          type="file"
          accept="images/*"
          data-file={file}
          ref={ref}
        />
      </label>
    </AvatarContainer>
  );
}
