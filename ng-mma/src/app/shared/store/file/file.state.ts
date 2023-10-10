import { HttpErrorResponse } from '@angular/common/http';

export interface FileState {
  files: IFile[];
  loading: boolean;
  error: string | null;
}

export const initialState: FileState = {
  files: [],
  loading: false,
  error: null,
};

export enum FileType {
  image,
  pdf,
}

export interface IFile {
  id: number;
  file: File;
  fileType: FileType;
  size: number;
}
