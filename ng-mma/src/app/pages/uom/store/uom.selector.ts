import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UOMState } from './uom.state';

export const UOM_STATE_NAME = 'uom';

const getRecipeState = createFeatureSelector<UOMState>(UOM_STATE_NAME);

export const page = createSelector(getRecipeState, (state) => state.page);
export const uoms = createSelector(
  getRecipeState,
  (state) => state.page?.content || []
);
export const pageSize = createSelector(
  getRecipeState,
  (state) => state.page?.size || 0
);
export const totalElements = createSelector(
  getRecipeState,
  (state) => state.page?.totalElements || 0
);
export const loading = createSelector(getRecipeState, (state) => state.loading);
