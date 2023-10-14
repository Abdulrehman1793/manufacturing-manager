import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FileState } from './file.state';
import { IFile } from '../models';

export const FILES_STATE_NAME = 'files';

const selectState = createFeatureSelector<FileState>(FILES_STATE_NAME);

export const files = createSelector(selectState, (state) => state.files);

export const fileById = (id: number) => {
  return createSelector(selectState, (state) => {
    return state.files.some((row) => row.id == id);
  });
};

export const filesMap = createSelector(selectState, (state) => {
  return state.files.reduce((row: Record<number, IFile>, item: IFile) => {
    row[item.id] = item;
    return row;
  }, {});
});

export const loading = createSelector(selectState, (state) => state.loading);

export const selectError = createSelector(selectState, (state) => state.error);
