import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StaffState } from './staff.state';

export const STAFF_STATE_NAME = 'staff';

export const STAFF_CONTENT_STATE_NAME = 'content';
export const STAFF_FORM_STATE_NAME = 'form';

const state = createFeatureSelector<StaffState>(STAFF_STATE_NAME);

export const content = createSelector(state, (state) => state.content);

export const page = createSelector(content, (state) => state.page);
export const staffs = createSelector(
  content,
  (state) => state.page?.content || []
);
export const pageSize = createSelector(
  content,
  (state) => state.page?.size || 0
);
export const totalElements = createSelector(
  content,
  (state) => state.page?.totalElements || 0
);
export const loading = createSelector(content, (state) => state.loading);
