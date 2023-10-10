import { FileType } from './file-type';

export interface IFile {
  id: number;
  file: File;
  fileType: FileType;
  size: number;
}
