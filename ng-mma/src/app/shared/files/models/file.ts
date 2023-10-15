import { FileType } from './file-type';

export interface IFile {
  id: number;
  file?: File;
  bytes?: any;
  base64?: string;
  fileType: FileType;
  size: number;
}
