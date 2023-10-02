import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CostState } from './cost.state';

export const COST_STATE_NAME = 'cost';

export const COST_CONTENT_STATE_NAME = 'content';
export const COST_FORM_STATE_NAME = 'form';

const state = createFeatureSelector<CostState>(COST_STATE_NAME);

export const content = createSelector(state, (state) => state.content);

export const page = createSelector(content, (state) => state.page);
export const search = createSelector(content, (state) => state.search);
export const rows = createSelector(
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

export const form = createSelector(state, (state) => state.form);

export const submitted = createSelector(form, (state) => state.submitted);
export const submitting = createSelector(form, (state) => state.submitting);
export const formId = createSelector(form, (state) => state.id);
export const error = createSelector(form, (state) => state.error);
