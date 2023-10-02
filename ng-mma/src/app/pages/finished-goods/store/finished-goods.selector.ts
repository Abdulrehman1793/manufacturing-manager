import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FinishedGoodsState } from './finished-goods.state';

export const FINISHED_GOODS_STATE_NAME = 'finished-goods';

export const FINISHED_GOODS_CONTENT_STATE_NAME = 'content';
export const FINISHED_GOODS_FORM_STATE_NAME = 'form';

const state = createFeatureSelector<FinishedGoodsState>(
  FINISHED_GOODS_STATE_NAME
);

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
