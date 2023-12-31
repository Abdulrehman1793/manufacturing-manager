import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UOMState } from './uom.state';

export const UOM_STATE_NAME = 'uom';

const state = createFeatureSelector<UOMState>(UOM_STATE_NAME);

export const page = createSelector(state, (state) => state.page);
export const uoms = createSelector(state, (state) => state.page?.content || []);
export const pageSize = createSelector(state, (state) => state.page?.size || 0);
export const totalElements = createSelector(
  state,
  (state) => state.page?.totalElements || 0
);
export const loading = createSelector(state, (state) => state.loading);
