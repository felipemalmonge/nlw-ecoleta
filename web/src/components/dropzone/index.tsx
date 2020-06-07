import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import './styles.css';

interface Props {
  onFileUpload: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUpload }) => {
  const [selectedFileURL, setselectedFileURL] = useState('');
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileURL = URL.createObjectURL(file);

      setselectedFileURL(fileURL);
      onFileUpload(file);
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileURL ? (
        <img src={selectedFileURL} />
      ) : (
        <p>
          <FiUpload />
          Imagem do Estabelecimento
        </p>
      )}
    </div>
  );
};

export default Dropzone;
