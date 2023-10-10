import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FileState, IFile } from './file.state';

const selectState = createFeatureSelector<FileState>('files');

export const files = createSelector(selectState, (state) => state.files);

export const filesMap = createSelector(selectState, (state) => {
  return state.files.reduce((row: Record<number, IFile>, item: IFile) => {
    row[item.id] = item;
    return row;
  }, {});
});

export const loading = createSelector(selectState, (state) => state.loading);

export const selectError = createSelector(selectState, (state) => state.error);
