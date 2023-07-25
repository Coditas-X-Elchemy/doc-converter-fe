export interface IFilesUploader {
  docType: 'MSDS' | 'TDS';
}

export interface File extends Blob {
  lastModified: number;
  name: string;
}

export interface IFilesUploaderBody {
  docType: 'MSDS' | 'TDS';
  files: null | File[];
  removeFile: (fileIndex: number) => void;
}
