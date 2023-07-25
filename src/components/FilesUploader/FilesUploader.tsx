import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import style from './FilesUploader.module.scss';
import addFile from '../../assets/images/addFile.png';
import close from '../../assets/images/close.png';
import { IFilesUploader, IFilesUploaderBody } from './IFilesUploader';

const fileTypes = ['PDF'];

const FilesUploader: React.FC<IFilesUploader> = ({ docType = 'MSDS' }) => {
  const [files, setFiles] = useState<File[] | null>(null);

  const handleChange = (files: File[]) => {
    setFiles(files);
  };

  const clearFiles = () => {
    setFiles(null);
  };

  const removeFile = (fileIndex: number) => {
    const filesArray = files ? Array.from(files) : [];
    filesArray.splice(fileIndex, 1);
    if (filesArray.length === 0) {
      setFiles(null);
    } else {
      setFiles(filesArray);
    }
  };

  return (
    <div className={style.FilesUploader}>
      <FileUploader multiple={true} handleChange={handleChange} name="file" types={fileTypes} disabled={files !== null}>
        <FilesUploaderBody docType={docType} files={files} removeFile={removeFile} />
      </FileUploader>
      <div className={style.FilesActions}>
        <button className={style.clearButton} onClick={clearFiles}>
          Clear Files
        </button>
        <button className={style.uploadButton} disabled={files === null}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default FilesUploader;

const FilesUploaderBody: React.FC<IFilesUploaderBody> = ({ docType, files, removeFile }) => {
  function formatFileSize(bytes: number, decimalPoint: number) {
    if (bytes == 0) return '0 Bytes';
    var k = 1000,
      dm = decimalPoint || 2,
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  return (
    <div className={style.FilesUploaderBody}>
      <div className={style.contentContainer}>
        {files ? (
          Array.from(files).map((file, key) => (
            <div className={style.fileContainer} key={`file_${key}`}>
              <span className={style.fileName}>{file.name}</span>
              <span className={style.fileSize}>
                {formatFileSize(file.size, 2)}&nbsp;&nbsp;
                <img src={close} width={16} onClick={() => removeFile(key)} />
              </span>
            </div>
          ))
        ) : (
          <p>
            <img src={addFile} width={32} />
            Click here to upload or drop your&nbsp;<strong>{docType}</strong>&nbsp;documents here.
          </p>
        )}
      </div>
    </div>
  );
};
