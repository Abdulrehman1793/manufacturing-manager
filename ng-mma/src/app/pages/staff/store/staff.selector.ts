import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StaffState } from './staff.state';

export const STAFF_STATE_NAME = 'staff';

const state = createFeatureSelector<StaffState>(STAFF_STATE_NAME);

export const page = createSelector(state, (state) => state.page);
export const staffs = createSelector(
  state,
  (state) => state.page?.content || []
);
export const pageSize = createSelector(state, (state) => state.page?.size || 0);
export const totalElements = createSelector(
  state,
  (state) => state.page?.totalElements || 0
);
export const loading = createSelector(state, (state) => state.loading);
