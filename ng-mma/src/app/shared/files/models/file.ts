import { FileType } from './file-type';

export interface IFile {
  id: number;
  file?: File;
  bytes?: any;
  fileType: FileType;
  size: number;
}
