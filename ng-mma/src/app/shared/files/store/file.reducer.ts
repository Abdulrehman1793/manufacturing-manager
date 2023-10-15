import { createReducer, on } from '@ngrx/store';
import * as FileActions from './file.actions';
import { initialState } from './file.state';

export const filesReducer = createReducer(
  initialState,
  on(FileActions.cache_file, (state, { file, base64, fileType }) => {
    const fileExists = state.files.some((row) => row.id === -1);

    let files = state.files;
    if (fileExists) files = files.filter((row) => row.id !== -1);

    return {
      ...state,
      files: [...files, { base64, id: -1, size: file.size, fileType }],
      loading: true,
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
