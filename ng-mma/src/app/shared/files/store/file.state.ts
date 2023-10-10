import { IFile } from '../models';

export interface FileState {
  files: IFile[];
  selectedId: number;
  loading: boolean;
  error: string | null;
}

export const initialState: FileState = {
  files: [],
  selectedId: -1,
  loading: false,
  error: null,
};
