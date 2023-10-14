import { createReducer, on } from '@ngrx/store';
import * as FileActions from './file.actions';
import { initialState } from './file.state';

export const filesReducer = createReducer(
  initialState,
  on(FileActions.file_cache_request, (state, { file, base64, fileType }) => ({
    ...state,
    files: [...state.files, { base64, id: -1, size: file.size, fileType }],
    loading: true,
    error: null,
  })),
  on(FileActions.file_cache_success, (state, { bytes, id, fileType, size }) => {
    return {
      ...state,
      files: [...state.files, { bytes, id, size, fileType }],
      loading: false,
      error: null,
    };
  })
  // on(FileActions.file_save_request, (state, { file }) => ({
  //   ...state,
  //   loading: true,
  //   error: null,
  // })),
  // on(FileActions.file_save_success, (state, { file, id, fileType, size }) => {
  //   return {
  //     ...state,
  //     files: [...state.files, { file, id, size, fileType }],
  //     loading: false,
  //     error: null,
  //   };
  // }),
  // on(FileActions.file_save_failure, (state, { error }) => ({
  //   ...state,
  //   loading: false,
  //   error,
  // }))
);
