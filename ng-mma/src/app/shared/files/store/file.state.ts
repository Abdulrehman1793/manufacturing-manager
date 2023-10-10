import { IFile } from '../models';

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
