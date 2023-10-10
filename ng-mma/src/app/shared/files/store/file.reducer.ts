import { createReducer, on } from '@ngrx/store';
import * as FileActions from './file.actions';
import { initialState } from './file.state';

export const filesReducer = createReducer(
  initialState,
  on(FileActions.file_save_request, (state, { file }) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(FileActions.fiel_save_success, (state, { file, id, fileType, size }) => {
    return {
      ...state,
      files: [...state.files, { file, id, size, fileType }],
      loading: false,
      error: null,
    };
  }),
  on(FileActions.file_save_failure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
